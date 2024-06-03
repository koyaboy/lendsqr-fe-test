import "@testing-library/jest-dom/vitest";

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";

const mockedUsedNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedUsedNavigate,
  };
});

describe("Login", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("LOG IN")).toBeInTheDocument();
  });

  it("toggles password visibility", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const passwordInput = screen.getByPlaceholderText("Password");
    const showButton = screen.getByText("SHOW");

    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(showButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    const hideButton = await screen.findByText("HIDE");

    fireEvent.click(hideButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("shows validation errors with incorrect data on submission", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput: HTMLInputElement = screen.getByPlaceholderText("Email");
    const passwordInput: HTMLInputElement =
      screen.getByPlaceholderText("Password");

    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");

    fireEvent.click(screen.getByText("LOG IN"));

    expect(await screen.findByText("Email is required"));
    expect(await screen.findByText("Password is required"));

    fireEvent.change(emailInput, { target: { value: "someInput" } });

    fireEvent.click(screen.getByText("LOG IN"));

    expect(await screen.findByText("Enter a valid email address"));
  });

  it("shows error message for incorrect login", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "wrong@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "wrongPassword" },
    });

    fireEvent.click(screen.getByText("LOG IN"));

    expect(
      await screen.findByText("Wrong Email or Password")
    ).toBeInTheDocument();
    expect(localStorage.getItem("isAuthenticated")).toBeNull();
  });

  it("navigates to dashboard on successful login", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<div>Dashboard</div>} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "admin@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "admin" },
    });

    fireEvent.click(screen.getByText("LOG IN"));

    // Wait for the navigation to complete
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/", { replace: true });
    });
  });
});
