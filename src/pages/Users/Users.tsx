import React from "react";
import "./Users.scss";

function getStatusClassName(status: string) {
  const statusStyles: any = {
    inactive: "status-inactive",
    active: "status-active",
    pending: "status-pending",
    blacklisted: "status-blacklisted",
  };
  return statusStyles[status.toLowerCase()];
}

const Users = () => {
  const status = "Pending";
  const status2 = "Active";

  return (
    <>
      <div className="users">
        <h1>Users</h1>

        <div className="users-info-container">
          <div className="users-info">
            <div
              className="img-container"
              style={{ backgroundColor: "rgba(223, 24, 255, 0.1)" }}
            >
              <svg
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7809 10.9717L10.8295 11.0592C10.8282 11.0598 10.827 11.0605 10.8257 11.0611L10.7809 10.9717ZM10.7809 10.9717C10.8108 10.9567 10.8408 10.942 10.8707 10.9274L10.8683 10.9231L10.7809 10.9717ZM19.2882 10.4376L19.2877 10.4374C18.6974 10.1973 18.2366 10.0011 17.9162 9.73342C17.6117 9.47893 17.4326 9.15794 17.4084 8.6562C17.6451 8.35313 17.7986 7.97712 17.8978 7.64315C17.9958 7.31349 18.0427 7.01819 18.0633 6.86117C18.4558 6.2465 18.6135 5.6202 18.5473 5.18821C18.8775 4.39117 18.6457 3.74349 18.4261 3.23023C18.2437 2.79194 18.1121 2.42115 18.2809 1.94649L18.3906 1.65426L18.421 1.57334L18.3453 1.53157L18.0153 1.34938L18.0154 1.34919L18.0094 1.34639C16.8165 0.787077 15.4665 0.70846 14.4811 1.12481L14.4811 1.12474L14.4774 1.12644C13.8423 1.42519 13.3485 1.91218 13.1145 2.58762C12.7367 2.90253 12.5609 3.36163 12.5005 3.82113C12.4402 4.27953 12.4932 4.7492 12.5839 5.105C12.478 5.5783 12.6742 6.21148 13.0676 6.826C13.0882 6.98263 13.1351 7.27789 13.2331 7.60758C13.3321 7.94109 13.4853 8.31662 13.7213 8.61945C13.6803 9.12247 13.5005 9.44423 13.2003 9.69863C12.8846 9.96607 12.433 10.1623 11.8432 10.4021L11.8273 10.4085C11.4663 10.5531 11.1018 10.699 10.7361 10.8823L10.6428 10.9291L10.6935 11.0203L11.0604 11.6803L11.109 11.7676L11.1964 11.7192C11.4106 11.6004 11.6199 11.5151 11.8355 11.4273C11.9469 11.3819 12.06 11.3358 12.1762 11.2841C12.7413 11.0654 13.3623 10.8217 13.8399 10.4056C14.3245 9.98346 14.6578 9.38776 14.6578 8.47869V8.33173V8.29031L14.6286 8.26102L14.5186 8.15102C14.3348 7.96723 14.2032 7.67476 14.1177 7.38242C14.0326 7.09151 13.9978 6.81684 13.9978 6.68174V6.57173V6.54788L13.9871 6.52659L13.9501 6.45355L13.9508 6.45322L13.9441 6.44322C13.729 6.12054 13.6145 5.85478 13.5581 5.65967C13.5299 5.56202 13.5164 5.48287 13.5119 5.4237C13.5077 5.3698 13.5115 5.33824 13.5144 5.32518L13.5835 5.18625L13.5999 5.15317L13.5909 5.11735L13.554 4.97039L13.5542 4.97033L13.5519 4.9632C13.4649 4.70201 13.4206 4.3406 13.4558 4.00622C13.4913 3.66817 13.6048 3.38458 13.8062 3.24447L13.9153 3.172L13.9476 3.1506L13.957 3.11308L13.9936 2.96773C14.1331 2.48177 14.4069 2.14055 14.8894 1.93365L14.8895 1.93371L14.8928 1.93212C15.5387 1.62633 16.4281 1.64712 17.2688 1.97766C17.1823 2.59108 17.3669 3.06781 17.5437 3.4909C17.5559 3.52513 17.568 3.55866 17.5799 3.59158C17.7489 4.05943 17.8734 4.40387 17.6218 4.87462L17.6213 4.87432L17.6172 4.88468L17.5441 5.06773L17.5275 5.10926L17.5474 5.14931L17.6185 5.29222C17.6188 5.29411 17.6196 5.29839 17.6202 5.30577C17.6214 5.32076 17.6216 5.34271 17.6196 5.37184C17.6155 5.42988 17.603 5.51079 17.5767 5.6114C17.5245 5.81183 17.4188 6.08629 17.223 6.40748L17.1505 6.51365L17.1331 6.53916V6.57003V6.67374C17.1144 6.82135 17.0783 7.09568 16.999 7.3821C16.9178 7.67552 16.7951 7.96656 16.6124 8.14932L16.5024 8.25932L16.4731 8.28861V8.33003V8.47698C16.4731 9.38606 16.8065 9.98176 17.291 10.4039C17.7693 10.8206 18.3913 11.0644 18.957 11.2833C19.5285 11.5045 20.0441 11.71 20.4373 12.0368C20.8038 12.3416 21.0671 12.7552 21.1538 13.4H14.667H14.567V13.5V14.2331V14.3331H14.667H22H22.1V14.2331V13.8661C22.1 12.7212 21.7041 11.9794 21.1466 11.4649C20.595 10.9558 19.8906 10.675 19.2882 10.4376Z"
                  fill="#DF18FF"
                  stroke="#DF18FF"
                  stroke-width="0.2"
                />
                <path
                  d="M7.22392 1.52085C6.14637 1.52085 5.53815 2.03195 5.22969 2.33764C4.2622 2.58717 3.75817 3.12827 3.49683 3.77942C3.24049 4.41807 3.21981 5.1586 3.20167 5.80797L3.20094 5.83421C3.20094 5.83435 3.20093 5.83448 3.20093 5.83462C3.18236 6.35064 3.16407 6.83441 3.06168 7.24854C2.96036 7.65836 2.77923 7.98887 2.4423 8.20904L2.11541 8.39037L2.02052 8.443L2.08071 8.53328L2.3007 8.86326C2.81691 9.63803 3.96456 10.3622 5.15284 10.7086C4.74433 11.862 3.75589 12.2426 2.68054 12.6366C2.04187 12.855 1.34551 13.0982 0.811165 13.5472C0.269578 14.0023 -0.1 14.6633 -0.1 15.7V16.0669V16.1669H0H13.933H14.033V16.0669V15.7C14.033 14.6633 13.6635 14.0025 13.127 13.5474C12.5974 13.0982 11.9104 12.8547 11.2908 12.6359C11.2748 12.63 11.2589 12.6242 11.243 12.6183C10.1834 12.2304 9.21975 11.8775 8.81722 10.708C10.0058 10.3617 11.153 9.63731 11.6701 8.86245L11.6702 8.8624L11.8902 8.5324L11.9504 8.44212L11.8555 8.38949L11.528 8.20784C11.2099 8.00594 11.0004 7.64812 10.8478 7.1812C10.695 6.71363 10.6045 6.15366 10.5127 5.56543L10.5126 5.56442C10.5081 5.53789 10.5037 5.51124 10.4993 5.48447C10.3571 4.62867 10.1955 3.65602 9.75846 2.89124C9.53166 2.49434 9.22924 2.15024 8.81487 1.90596C8.40045 1.66164 7.88033 1.52085 7.22392 1.52085ZM13.0804 15.233H0.885611C0.972968 14.723 1.21322 14.4009 1.55226 14.1586C1.89855 13.9112 2.34679 13.7471 2.85636 13.5606C2.8931 13.5472 2.93015 13.5336 2.96751 13.5199L2.96788 13.5198C2.98244 13.5144 2.99702 13.509 3.01163 13.5035C3.63804 13.2708 4.31282 13.0201 4.88621 12.5843C5.47744 12.135 5.95844 11.4914 6.1837 10.4777L6.18372 10.4778L6.18415 10.4756L6.2572 10.1086L6.27672 10.0105L6.17865 9.99102L5.81169 9.91797L5.81169 9.91796L5.81035 9.91771C4.87991 9.74568 3.88295 9.20815 3.33135 8.66185C3.6876 8.30647 3.87773 7.86429 3.9834 7.39758C4.09456 6.90659 4.1137 6.38085 4.13149 5.89253L4.1321 5.87577H4.13211L4.13214 5.87459C4.1507 5.11934 4.1882 4.52532 4.38069 4.08331C4.47559 3.86541 4.60774 3.68607 4.79419 3.54352C4.98132 3.40045 5.22786 3.29085 5.55633 3.21987L5.55646 3.22048L5.56705 3.21692L5.67705 3.17997L5.69931 3.17249L5.71592 3.15589L5.78896 3.08284L5.78946 3.08234C6.04114 2.83066 6.41967 2.45213 7.22129 2.45213C7.65914 2.45213 7.99995 2.52809 8.27152 2.66846C8.54227 2.8084 8.75076 3.01572 8.91924 3.2893C9.26016 3.84286 9.43195 4.65661 9.6157 5.70562C9.70696 6.27246 9.79964 6.84743 9.95778 7.36815C10.106 7.85628 10.3138 8.30419 10.6385 8.65853C10.0876 9.20587 9.0885 9.7445 8.15606 9.91772L8.15481 9.91797L7.78785 9.99102L7.68977 10.0105L7.7093 10.1086L7.78234 10.4756L7.78243 10.476C7.98903 11.491 8.47062 12.1351 9.06674 12.5845C9.63655 13.0141 10.3094 13.2639 10.9286 13.4938C10.952 13.5025 10.9754 13.5111 10.9986 13.5198L10.9991 13.5199L11.0071 13.5229C11.5578 13.7247 12.0443 13.9029 12.4139 14.1714C12.7533 14.4178 12.993 14.74 13.0804 15.233Z"
                  fill="#DF18FF"
                  stroke="#DF18FF"
                  stroke-width="0.2"
                />
              </svg>
            </div>
            <p className="title">USERS</p>
            <p className="amount">2,453</p>
          </div>

          <div className="users-info">
            <div
              className="img-container"
              style={{ backgroundColor: "rgba(87, 24, 255, 0.1)" }}
            >
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.40876 17.7755L4.40878 17.7753C4.2427 17.7637 4.10507 17.6935 4.01017 17.5773C3.93547 17.4858 3.89111 17.3707 3.87616 17.243H3.86763V17.143C3.86763 15.8381 4.2137 14.6162 4.81335 13.5614H1.43539C1.26471 13.5614 1.11848 13.4984 1.01507 13.3838C0.912837 13.2704 0.85955 13.1146 0.856345 12.9395M4.40876 17.7755L0.956323 12.9373M4.40876 17.7755L4.41574 17.7755L17.5545 17.7784C17.8752 17.7784 18.1335 17.5188 18.1335 17.1993C18.1335 15.9325 17.7596 14.6106 17.1652 13.5615L20.5639 13.5606C20.8846 13.5606 21.143 13.301 21.143 12.9815L21.143 12.9803C21.1124 10.5787 19.7611 8.54781 17.642 7.67851C18.786 6.95121 19.5184 5.67431 19.5184 4.25897C19.5184 0.796036 15.468 -1.03867 12.9041 1.20528C11.6926 0.706119 10.3069 0.706116 9.09542 1.20528C8.3769 0.576855 7.45379 0.222467 6.48189 0.222467C2.45243 0.222467 0.995241 5.57355 4.35675 7.68005M4.40876 17.7755L4.58344 7.69863C4.54585 7.67739 4.50882 7.65576 4.47235 7.63375C4.43362 7.64875 4.39508 7.66418 4.35675 7.68005M0.856345 12.9395C0.856343 12.9394 0.856341 12.9393 0.856339 12.9391L0.956323 12.9373M0.856345 12.9395C0.856348 12.9396 0.856351 12.9397 0.856353 12.9398L0.956323 12.9373M0.856345 12.9395C0.80084 10.6744 2.27898 8.54032 4.35675 7.68005M0.956323 12.9373C0.901131 10.691 2.38568 8.57118 4.46325 7.74475C4.42723 7.72354 4.39173 7.70197 4.35675 7.68005M4.98763 13.4614H4.87125L4.92864 13.5614C4.94804 13.5279 4.96771 13.4946 4.98763 13.4614ZM17.5289 2.2208L17.529 2.22083C19.2108 3.91955 18.1948 6.83041 15.877 7.11796C16.3723 5.11422 15.6089 3.03533 13.9941 1.82705C15.1109 1.10957 16.5822 1.26358 17.5289 2.2208ZM6.12476 7.11767C4.71237 6.93785 3.64026 5.71877 3.64026 4.2608C3.64026 1.96075 6.14996 0.626447 8.00796 1.82696C6.39303 3.03507 5.62969 5.11381 6.12476 7.11767ZM14.4988 7.53981C13.1179 10.541 8.88195 10.5437 7.50112 7.53988C6.27847 4.87711 8.24229 1.98947 10.989 1.98904C13.9024 2.02526 15.6822 4.96716 14.4988 7.53981ZM2.0459 12.4043C2.31215 10.0953 4.28099 8.34345 6.6465 8.41985C7.11463 9.23527 7.80133 9.91068 8.63053 10.3566C7.46485 10.7713 6.43557 11.482 5.63465 12.4042L2.0459 12.4043ZM16.3445 12.4042C15.5465 11.4875 14.5226 10.7755 13.3622 10.3621C14.1946 9.91413 14.8858 9.2383 15.356 8.4198C17.7215 8.34338 19.6905 10.0943 19.9566 12.4042H16.3445ZM5.04793 16.6202C5.16912 15.1942 5.80652 13.8488 6.77177 12.8727C10.381 9.22483 16.5119 11.5852 16.9316 16.6202H5.04793Z"
                  fill="#5718FF"
                  stroke="#5718FF"
                  stroke-width="0.2"
                />
                <path
                  d="M12.2471 6.79774L12.2395 6.81237C11.7073 7.81758 10.2757 7.81072 9.75087 6.79791C9.6665 6.6342 9.53676 6.53764 9.39242 6.50168C9.25055 6.46634 9.10191 6.49121 8.97735 6.55535C8.8528 6.61949 8.7462 6.72605 8.69256 6.86213C8.63799 7.00061 8.64128 7.16245 8.72562 7.32643L8.72568 7.32656C9.68163 9.17903 12.32 9.17911 13.275 7.32652C13.3596 7.16254 13.3631 7.00062 13.3085 6.86202C13.2548 6.72582 13.1481 6.61917 13.0233 6.55498C12.8985 6.49079 12.7495 6.46592 12.6073 6.50127C12.4625 6.53724 12.3322 6.63383 12.2471 6.79774ZM13.1861 7.2807C12.2683 9.06102 9.73326 9.06102 8.81455 7.2807L12.4019 6.74383C12.7353 6.3458 13.4544 6.7607 13.1861 7.2807Z"
                  fill="#5718FF"
                  stroke="#5718FF"
                  stroke-width="0.2"
                />
              </svg>
            </div>
            <p className="title">ACTIVE USERS</p>
            <p className="amount">2,453</p>
          </div>

          <div className="users-info">
            <div
              className="img-container"
              style={{ backgroundColor: "rgba(245, 95, 68, 0.1)" }}
            >
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.96167 0.400011V16.4118H7.31567V15.2118H2.16167V1.60001H8.19987V5.95781H12.3155V9.65381H13.5155V4.92561L9.08807 0.399811L0.96167 0.400011ZM9.39987 2.43601L11.6741 4.75781H9.39987V2.43601Z"
                  fill="#F55F44"
                />
                <path
                  d="M3.3938 8.35242H10.604V9.55242H3.3938V8.35242Z"
                  fill="#F55F44"
                />
                <path
                  d="M3.3938 10.9524H7.004V12.1524H3.3938V10.9524Z"
                  fill="#F55F44"
                />
                <path
                  d="M17.0381 17.9422V12.4C17.0381 10.7719 13.1921 10.7258 12.7537 10.7258C12.3154 10.7258 8.47168 10.7758 8.47168 12.4V17.9796C8.47246 18.0406 8.48262 18.1007 8.50215 18.1577C8.84355 19.5601 12.3381 19.5999 12.7561 19.5999C13.1741 19.5999 16.9561 19.5523 17.0357 17.9741C17.0357 17.9656 17.0381 17.9562 17.0381 17.9421L17.0381 17.9422ZM15.8381 14.1422C15.5998 14.3618 14.4998 14.7203 12.7561 14.7203C11.0115 14.7203 9.92008 14.3617 9.67168 14.15V13.6344C10.8396 14.0602 12.4717 14.0782 12.7561 14.0782C13.0405 14.0782 14.6717 14.0578 15.8405 13.6344L15.8381 14.1422ZM9.67168 15.4758C10.8396 15.9016 12.4717 15.9196 12.7561 15.9196C13.0405 15.9196 14.6717 15.8993 15.8405 15.4758L15.8397 16C15.592 16.2118 14.4999 16.5704 12.7553 16.5704C11.0115 16.5704 9.9201 16.2 9.6717 16L9.67168 15.4758ZM12.7561 11.9298C14.2561 11.9298 15.2741 12.1954 15.6881 12.404C15.274 12.604 14.256 12.8783 12.7561 12.8783C11.2561 12.8783 10.2357 12.6142 9.82408 12.4001C10.2358 12.2001 11.2538 11.9298 12.7561 11.9298ZM9.67168 17.8344V17.318C10.8396 17.7438 12.4717 17.7618 12.7561 17.7618C13.0405 17.7618 14.6717 17.7415 15.8405 17.318V17.8336C15.5897 18.0461 14.4999 18.4 12.7561 18.4C11.0115 18.4 9.92008 18.0461 9.67168 17.8344Z"
                  fill="#F55F44"
                />
              </svg>
            </div>
            <p className="title">USERS WITH LOANS</p>
            <p className="amount">12,453</p>
          </div>

          <div className="users-info">
            <div
              className="img-container"
              style={{ backgroundColor: "rgba(255, 51, 102, 0.1)" }}
            >
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6002 2.25C15.6002 1.52193 15.0002 0.934328 14.1059 0.534069C13.2049 0.130866 11.9713 -0.1 10.6248 -0.1C9.27857 -0.1 8.04511 0.130867 7.14429 0.534071C6.25004 0.93433 5.65 1.52193 5.65 2.25C5.65 2.97807 6.25004 3.56567 7.14429 3.96593C8.04511 4.36913 9.27857 4.6 10.6248 4.6C11.9713 4.6 13.2049 4.36913 14.1059 3.96593C15.0002 3.56567 15.6002 2.97807 15.6002 2.25ZM6.60024 2.25C6.60024 2.10802 6.68874 1.94724 6.88614 1.78025C7.08165 1.61485 7.37054 1.45542 7.7363 1.31648C8.46698 1.03894 9.48577 0.85024 10.6248 0.85024C11.7637 0.85024 12.7827 1.03894 13.5136 1.31649C13.8794 1.45543 14.1684 1.61487 14.364 1.78027C14.5615 1.94727 14.65 2.10804 14.65 2.25C14.65 2.39196 14.5615 2.55273 14.364 2.71974C14.1684 2.88513 13.8794 3.04457 13.5136 3.18351C12.7827 3.46106 11.7637 3.64976 10.6248 3.64976C9.48577 3.64976 8.46698 3.46106 7.7363 3.18351C7.37054 3.04457 7.08165 2.88514 6.88614 2.71975C6.68874 2.55275 6.60024 2.39198 6.60024 2.25Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
                <path
                  d="M15.6002 2.25V2.15H15.5002H14.75H14.65V2.25V4.5C14.65 4.64197 14.5615 4.80274 14.364 4.96974C14.1684 5.13514 13.8794 5.29458 13.5136 5.43352C12.7827 5.71106 11.7637 5.89976 10.6248 5.89976C9.48577 5.89976 8.46698 5.71106 7.7363 5.43351C7.37054 5.29457 7.08165 5.13514 6.88614 4.96975C6.68874 4.80275 6.60024 4.64198 6.60024 4.5V2.25V2.15H6.50024H5.75H5.65V2.25V4.5C5.65 5.22807 6.25004 5.81567 7.14429 6.21593C8.04511 6.61913 9.27857 6.85 10.6248 6.85C11.9713 6.85 13.2049 6.61913 14.1059 6.21593C15.0002 5.81567 15.6002 5.22807 15.6002 4.5V2.25Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
                <path
                  d="M5.65 6.75702V6.83833L5.7296 6.85491L5.72961 6.85491L5.73796 6.85665L5.74649 6.85695C6.00336 6.866 6.2532 6.8848 6.49323 6.91193L6.62051 6.92632L6.60358 6.79935C6.60133 6.78244 6.60024 6.76647 6.60024 6.74998V4.49998V4.39998H6.50024H5.75H5.65V4.49998V6.74998V6.75702ZM9.50147 8.94541L9.50453 9.04459C9.86508 9.08079 10.2404 9.09994 10.6248 9.09994C11.9713 9.09994 13.2049 8.86907 14.1059 8.46587C15.0002 8.06561 15.6002 7.47801 15.6002 6.74994V4.49994V4.39994H15.5002H14.75H14.65V4.49994V6.74994C14.65 6.89191 14.5615 7.05268 14.364 7.21968C14.1684 7.38508 13.8794 7.54452 13.5136 7.68345C12.7827 7.961 11.7637 8.1497 10.6248 8.1497C10.2361 8.1497 9.8616 8.12811 9.50685 8.08776L9.37949 8.07328L9.39643 8.20034C9.39867 8.21716 9.39977 8.23384 9.39977 8.2497C9.39977 8.31385 9.40544 8.56946 9.41456 8.9475L9.50147 8.94541Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
                <path
                  d="M9.4708 11.1525L9.30938 11.2763L9.56264 11.3004C9.90546 11.3331 10.2609 11.3501 10.6247 11.3501C11.9712 11.3501 13.2049 11.1192 14.1058 10.716C15.0001 10.3158 15.6002 9.72816 15.6002 9.00009V6.75009V6.65009H15.5002H14.7499H14.6499V6.75009V9.00009C14.6499 9.14206 14.5614 9.30283 14.3639 9.46984C14.1684 9.63523 13.8794 9.79467 13.5135 9.93361C12.7827 10.2112 11.7637 10.3999 10.6247 10.3999C10.257 10.3999 9.90052 10.3803 9.56311 10.3442L9.44952 10.332L9.45248 10.4462C9.45444 10.5218 9.4564 10.5983 9.45838 10.6757C9.46238 10.8316 9.46646 10.9909 9.4708 11.1525ZM6.48926 6.91133L6.60024 6.92359V6.81194V6.75006V6.65006H6.50024H5.75H5.65V6.75006V6.75709V6.85361L5.74646 6.85703C6.0019 6.86608 6.24972 6.88487 6.48926 6.91133Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
                <path
                  d="M10.35 9C10.35 8.27193 9.74995 7.68433 8.85571 7.28407C7.95489 6.88087 6.72142 6.65 5.37524 6.65C4.02869 6.65 2.79505 6.88087 1.89414 7.28407C0.999803 7.68433 0.399756 8.27193 0.399756 9C0.399756 9.72807 0.999803 10.3157 1.89414 10.7159C2.79505 11.1191 4.02869 11.35 5.37524 11.35C6.72142 11.35 7.95489 11.1191 8.85571 10.7159C9.74995 10.3157 10.35 9.72807 10.35 9ZM1.35 9C1.35 8.85803 1.43852 8.69726 1.636 8.53026C1.83158 8.36486 2.12055 8.20542 2.48641 8.06648C3.21728 7.78894 4.23625 7.60024 5.37524 7.60024C6.51422 7.60024 7.53301 7.78894 8.26369 8.06649C8.62946 8.20543 8.91834 8.36486 9.11385 8.53025C9.31126 8.69725 9.39976 8.85802 9.39976 9C9.39976 9.14198 9.31126 9.30275 9.11385 9.46975C8.91834 9.63514 8.62946 9.79457 8.26369 9.93351C7.53301 10.2111 6.51422 10.3998 5.37524 10.3998C4.23625 10.3998 3.21728 10.2111 2.48641 9.93351C2.12055 9.79457 1.83158 9.63513 1.636 9.46974C1.43852 9.30273 1.35 9.14196 1.35 9Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
                <path
                  d="M10.35 9V8.9H10.25H9.49976H9.39976V9V11.25C9.39976 11.392 9.31126 11.5528 9.11385 11.7198C8.91834 11.8851 8.62946 12.0446 8.26369 12.1835C7.53301 12.4611 6.51422 12.6498 5.37524 12.6498C4.23625 12.6498 3.21728 12.4611 2.48641 12.1835C2.12055 12.0446 1.83158 11.8851 1.636 11.7197C1.43852 11.5527 1.35 11.392 1.35 11.25V9V8.9H1.25H0.499756H0.399756V9V11.25C0.399756 11.9781 0.999803 12.5657 1.89414 12.9659C2.79505 13.3691 4.02869 13.6 5.37524 13.6C6.72142 13.6 7.95489 13.3691 8.85571 12.9659C9.74995 12.5657 10.35 11.9781 10.35 11.25V9Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
                <path
                  d="M10.35 11.25V11.15H10.25H9.49976H9.39976V11.25V13.5C9.39976 13.642 9.31126 13.8028 9.11385 13.9698C8.91834 14.1351 8.62946 14.2946 8.26369 14.4335C7.53301 14.7111 6.51422 14.8998 5.37524 14.8998C4.23625 14.8998 3.21728 14.7111 2.48641 14.4335C2.12055 14.2946 1.83158 14.1351 1.636 13.9697C1.43852 13.8027 1.35 13.642 1.35 13.5V11.25V11.15H1.25H0.499756H0.399756V11.25V13.5C0.399756 14.2281 0.999803 14.8157 1.89414 15.2159C2.79505 15.6191 4.02869 15.85 5.37524 15.85C6.72142 15.85 7.95489 15.6191 8.85571 15.2159C9.74995 14.8157 10.35 14.2281 10.35 13.5V11.25Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
                <path
                  d="M10.35 13.5V13.4H10.25H9.49976H9.39976V13.5V15.75C9.39976 15.892 9.31126 16.0528 9.11385 16.2198C8.91834 16.3851 8.62946 16.5446 8.26369 16.6835C7.53301 16.9611 6.51422 17.1498 5.37524 17.1498C4.23625 17.1498 3.21728 16.9611 2.48641 16.6835C2.12055 16.5446 1.83158 16.3851 1.636 16.2197C1.43852 16.0527 1.35 15.892 1.35 15.75V13.5V13.4H1.25H0.499756H0.399756V13.5V15.75C0.399756 16.4781 0.999803 17.0657 1.89414 17.4659C2.79505 17.8691 4.02869 18.1 5.37524 18.1C6.72142 18.1 7.95489 17.8691 8.85571 17.4659C9.74995 17.0657 10.35 16.4781 10.35 15.75V13.5Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
                <path
                  d="M9.53952 13.4945L9.56261 13.5506L9.62306 13.556C9.94746 13.5851 10.2823 13.6 10.6248 13.6C11.9713 13.6 13.205 13.3692 14.1059 12.966C15.0002 12.5657 15.6003 11.9781 15.6003 11.25V9.00003V8.90003H15.5003H14.7501H14.6501V9.00003V11.25C14.6501 11.392 14.5615 11.5528 14.364 11.7198C14.1685 11.8852 13.8795 12.0446 13.5136 12.1835C12.7828 12.4611 11.7638 12.6498 10.6248 12.6498C10.278 12.6498 9.9424 12.6324 9.62225 12.6004L9.50957 12.5891L9.51233 12.7023C9.51648 12.8717 9.52093 13.0392 9.52528 13.203C9.52757 13.2894 9.52984 13.3748 9.53203 13.459L9.5325 13.4774L9.53952 13.4945L9.53952 13.4945Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
                <path
                  d="M9.59891 15.7459L9.62071 15.8065L9.68487 15.8117C9.98915 15.8365 10.3041 15.85 10.6246 15.85C11.9712 15.85 13.2048 15.6191 14.1057 15.2159C15.0001 14.8157 15.6001 14.2281 15.6001 13.5V11.25V11.15H15.5001H14.7499H14.6499V11.25V13.5C14.6499 13.642 14.5614 13.8027 14.3639 13.9697C14.1683 14.1351 13.8793 14.2946 13.5135 14.4335C12.7826 14.7111 11.7636 14.8998 10.6246 14.8998C10.2994 14.8998 9.98403 14.8844 9.68201 14.8559L9.56957 14.8453L9.57264 14.9582C9.5778 15.1476 9.58212 15.3097 9.58552 15.4372C9.58906 15.5703 9.5916 15.6657 9.59304 15.7149L9.59351 15.7309L9.59891 15.7459L9.59891 15.7459Z"
                  fill="#FF3366"
                  stroke="#FF3366"
                  stroke-width="0.2"
                />
              </svg>
            </div>
            <p className="title">USERS WITH SAVINGS</p>
            <p className="amount">102,453</p>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>
                  <div>
                    <p>ORGANIZATION</p>
                    <button>
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="#545F7D"
                        />
                      </svg>
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <p>USERNAME</p>
                    <button>
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="#545F7D"
                        />
                      </svg>
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <p>EMAIL</p>
                    <button>
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="#545F7D"
                        />
                      </svg>
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <p>PHONE NUMBER</p>
                    <button>
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="#545F7D"
                        />
                      </svg>
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <p>DATE JOINED</p>
                    <button>
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="#545F7D"
                        />
                      </svg>
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <p>STATUS</p>
                    <button>
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="#545F7D"
                        />
                      </svg>
                    </button>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Lendsr</td>
                <td>Adedji</td>
                <td>adedji@keiff.com</td>
                <td>080399999999</td>
                <td>May 2024, 20:00pm</td>
                <td>
                  <div className="status-container">
                    <div className={`status ${getStatusClassName(status)}`}>
                      {status}
                    </div>
                  </div>

                  {/* <div > */}
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ellipsis"
                  >
                    <path
                      d="M1.99992 4.1111C2.92214 4.1111 3.66658 3.36666 3.66658 2.44444C3.66658 1.52222 2.92214 0.777771 1.99992 0.777771C1.0777 0.777771 0.333252 1.52222 0.333252 2.44444C0.333252 3.36666 1.0777 4.1111 1.99992 4.1111ZM1.99992 6.33333C1.0777 6.33333 0.333252 7.07777 0.333252 7.99999C0.333252 8.92221 1.0777 9.66666 1.99992 9.66666C2.92214 9.66666 3.66658 8.92221 3.66658 7.99999C3.66658 7.07777 2.92214 6.33333 1.99992 6.33333ZM1.99992 11.8889C1.0777 11.8889 0.333252 12.6333 0.333252 13.5555C0.333252 14.4778 1.0777 15.2222 1.99992 15.2222C2.92214 15.2222 3.66658 14.4778 3.66658 13.5555C3.66658 12.6333 2.92214 11.8889 1.99992 11.8889Z"
                      fill="#545F7D"
                    />
                  </svg>
                  {/* </div> */}
                </td>
              </tr>

              <tr>
                <td>Lendsr</td>
                <td>Adedji</td>
                <td>adedji@keiff.com</td>
                <td>080399999999</td>
                <td>May 2024, 20:00pm</td>
                <td>
                  <div className="status-container">
                    <div className={`status ${getStatusClassName(status2)}`}>
                      {status2}
                    </div>
                  </div>

                  {/* <div > */}
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ellipsis"
                  >
                    <path
                      d="M1.99992 4.1111C2.92214 4.1111 3.66658 3.36666 3.66658 2.44444C3.66658 1.52222 2.92214 0.777771 1.99992 0.777771C1.0777 0.777771 0.333252 1.52222 0.333252 2.44444C0.333252 3.36666 1.0777 4.1111 1.99992 4.1111ZM1.99992 6.33333C1.0777 6.33333 0.333252 7.07777 0.333252 7.99999C0.333252 8.92221 1.0777 9.66666 1.99992 9.66666C2.92214 9.66666 3.66658 8.92221 3.66658 7.99999C3.66658 7.07777 2.92214 6.33333 1.99992 6.33333ZM1.99992 11.8889C1.0777 11.8889 0.333252 12.6333 0.333252 13.5555C0.333252 14.4778 1.0777 15.2222 1.99992 15.2222C2.92214 15.2222 3.66658 14.4778 3.66658 13.5555C3.66658 12.6333 2.92214 11.8889 1.99992 11.8889Z"
                      fill="#545F7D"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
