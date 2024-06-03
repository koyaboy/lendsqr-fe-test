import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Users from "./Users";
import { MemoryRouter } from "react-router-dom";

// Mock fetch response
const mockUsers = Array.from({ length: 100 }, (_, i) => ({
  _id: `${i + 1}`,
  organization: `Org${i + 1}`,
  username: `user${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `123456789${i}`,
  date_joined: "2022-01-01",
  status: "active",
}));
// Add more mock user data as needed

describe("Users component", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUsers),
        })
      )
    );
  });

  it("displays loading spinner while fetching data", () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("tail-spin-loading")).toBeInTheDocument();
  });

  it("displays users data after fetching", async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(await screen.findByText("user1")).toBeInTheDocument();
    expect(await screen.findByText("Org1")).toBeInTheDocument();
    expect(await screen.findByText("user1@example.com")).toBeInTheDocument();
    expect(await screen.findByText("1234567890")).toBeInTheDocument();
  });

  it("navigates to the next page when the next button is clicked", async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(await screen.findByText("user1")).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    await waitFor(() => expect(screen.getByText("user11")).toBeInTheDocument());
    expect(screen.queryByText("user1")).not.toBeInTheDocument();
  });

  it("navigates to the previous page when the prev button is clicked", async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(await screen.findByText("user1")).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    expect(await screen.findByText("user11")).toBeInTheDocument();

    const prevButton = screen.getByRole("button", { name: /prev/i });
    fireEvent.click(prevButton);

    expect(await screen.findByText("user1")).toBeInTheDocument();
    expect(screen.queryByText("user11")).not.toBeInTheDocument();
  });

  it("updates items per page correctly", async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(await screen.findByText("user1")).toBeInTheDocument();
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "20" } });

    expect(await screen.findByText("user20")).toBeInTheDocument();
    expect(screen.queryByText("user21")).not.toBeInTheDocument();
  });
});
