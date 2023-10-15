import React from "react";

const IconTwo = ({ width, height, bgColor, color }) => {
  return (
    <svg
      width={width || "74"}
      height={height || "85"}
      viewBox="0 0 38 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_174_6654)">
        <path
          d="M21.0251 56H16.9749C15.3798 55.9948 13.845 55.3922 12.6754 54.312C11.5057 53.2318 10.7868 51.753 10.6613 50.1692C10.6397 49.8791 10.7345 49.5924 10.9252 49.372C11.1158 49.1516 11.3865 49.0156 11.6777 48.994C11.969 48.9724 12.2569 49.0669 12.4782 49.2567C12.6995 49.4466 12.8361 49.7162 12.8578 50.0063C12.9396 51.0394 13.4083 52.0041 14.1709 52.7092C14.9335 53.4142 15.9344 53.808 16.9749 53.8125H21.0251C22.0668 53.8097 23.0692 53.4166 23.8333 52.7114C24.5973 52.0062 25.0669 51.0405 25.1488 50.0063C25.1705 49.7169 25.3068 49.448 25.5275 49.2587C25.7483 49.0693 26.0356 48.9751 26.3261 48.9967C26.6166 49.0183 26.8867 49.154 27.0767 49.3739C27.2668 49.5938 27.3614 49.8799 27.3397 50.1692C27.2143 51.7532 26.4952 53.2321 25.3253 54.3124C24.1555 55.3926 22.6204 55.995 21.0251 56ZM26.2569 46.363C25.9657 46.363 25.6863 46.2477 25.4804 46.0426C25.2744 45.8375 25.1587 45.5593 25.1587 45.2692V41.8141C25.1588 41.6023 25.2206 41.3951 25.3366 41.2177C25.4525 41.0402 25.6178 40.9001 25.8121 40.8144C28.7849 39.4987 31.311 37.3531 33.0846 34.6372C34.8583 31.9213 35.8035 28.7516 35.8058 25.5117C35.8058 16.2837 28.2677 8.77734 19.0033 8.77734C9.73886 8.77734 2.2008 16.2837 2.2008 25.5117C2.20309 28.7516 3.14828 31.9213 4.92194 34.6372C6.69561 37.3531 9.2217 39.4987 12.1944 40.8144C12.3886 40.9003 12.5536 41.0405 12.6694 41.2179C12.7852 41.3954 12.8468 41.6024 12.8468 41.8141V45.2692C12.8468 45.5593 12.7311 45.8375 12.5251 46.0426C12.3192 46.2477 12.0398 46.363 11.7486 46.363C11.4573 46.363 11.178 46.2477 10.972 46.0426C10.7661 45.8375 10.6504 45.5593 10.6504 45.2692V42.5097C7.45747 40.9508 4.76715 38.532 2.88464 35.5275C1.00213 32.523 0.00279302 29.0532 0 25.5117C0 15.0784 8.52315 6.58984 18.9989 6.58984C29.4747 6.58984 37.9978 15.0784 37.9978 25.5117C37.9956 29.0526 36.9972 32.5221 35.1157 35.5266C33.2341 38.531 30.5449 40.9502 27.3529 42.5097V45.2692C27.3529 45.5589 27.2375 45.8368 27.032 46.0418C26.8266 46.2469 26.5478 46.3624 26.2569 46.363Z"
          fill={color || "black"}
        />
        <path
          d="M28.1931 51.1809H9.80695C9.51569 51.1809 9.23635 51.0656 9.0304 50.8605C8.82445 50.6554 8.70875 50.3772 8.70875 50.0871V45.2692C8.70875 44.9791 8.82445 44.7009 9.0304 44.4958C9.23635 44.2906 9.51569 44.1754 9.80695 44.1754H28.1931C28.4843 44.1754 28.7636 44.2906 28.9696 44.4958C29.1756 44.7009 29.2913 44.9791 29.2913 45.2692V50.0871C29.2913 50.3772 29.1756 50.6554 28.9696 50.8605C28.7636 51.0656 28.4843 51.1809 28.1931 51.1809ZM10.9052 48.9934H27.0948V46.3629H10.9052V48.9934ZM9.80695 29.401C8.93813 29.399 8.09351 29.1159 7.40026 28.5943C6.70702 28.0727 6.2027 27.3409 5.96324 26.5092H1.0982C0.806941 26.5092 0.527609 26.3939 0.321656 26.1888C0.115703 25.9837 0 25.7055 0 25.4154C0 25.1253 0.115703 24.8471 0.321656 24.642C0.527609 24.4369 0.806941 24.3217 1.0982 24.3217H6.9044C7.04862 24.3217 7.19142 24.3499 7.32466 24.4049C7.4579 24.4599 7.57897 24.5404 7.68094 24.642C7.78292 24.7436 7.86382 24.8641 7.919 24.9968C7.9742 25.1295 8.0026 25.2718 8.0026 25.4154C7.99666 25.6552 8.03895 25.8938 8.12699 26.117C8.21502 26.3403 8.34702 26.5438 8.51521 26.7154C8.6834 26.8871 8.88437 27.0236 9.10631 27.1167C9.32825 27.2099 9.56666 27.2579 9.8075 27.2579C10.0483 27.2579 10.2867 27.2099 10.5087 27.1167C10.7306 27.0236 10.9316 26.8871 11.0998 26.7154C11.268 26.5438 11.4 26.3403 11.488 26.117C11.576 25.8938 11.6183 25.6552 11.6124 25.4154C11.6124 25.1253 11.7281 24.8471 11.934 24.642C12.14 24.4369 12.4193 24.3217 12.7106 24.3217H24.3449C24.5837 23.4887 25.0885 22.7559 25.7828 22.2341C26.4772 21.7124 27.3233 21.4302 28.1931 21.4302C29.0628 21.4302 29.9089 21.7124 30.6033 22.2341C31.2976 22.7559 31.8024 23.4887 32.0412 24.3217H36.8996C37.1909 24.3217 37.4702 24.4369 37.6761 24.642C37.8821 24.8471 37.9978 25.1253 37.9978 25.4154C37.9978 25.7055 37.8821 25.9837 37.6761 26.1888C37.4702 26.3939 37.1909 26.5092 36.8996 26.5092H31.0956C30.8043 26.5092 30.525 26.3939 30.3191 26.1888C30.1131 25.9837 29.9974 25.7055 29.9974 25.4154C29.9858 24.9463 29.7905 24.5004 29.4533 24.1727C29.1161 23.845 28.6636 23.6616 28.1925 23.6616C27.7214 23.6616 27.2689 23.845 26.9317 24.1727C26.5945 24.5004 26.3992 24.9463 26.3876 25.4154C26.3876 25.7055 26.2719 25.9837 26.066 26.1888C25.86 26.3939 25.5807 26.5092 25.2894 26.5092H13.655C13.4154 27.3417 12.9104 28.074 12.2163 28.5956C11.5221 29.1172 10.6765 29.3999 9.80695 29.401Z"
          fill={color || "black"}
        />
        <path
          d="M18.9989 46.363C18.7076 46.363 18.4283 46.2477 18.2223 46.0426C18.0164 45.8375 17.9006 45.5593 17.9006 45.2692V36.5947C17.9006 36.3046 18.0164 36.0264 18.2223 35.8213C18.4283 35.6162 18.7076 35.5009 18.9989 35.5009C19.4774 35.5009 19.9363 35.3116 20.2747 34.9746C20.6131 34.6376 20.8032 34.1805 20.8032 33.7039C20.8032 33.2273 20.6131 32.7702 20.2747 32.4332C19.9363 32.0962 19.4774 31.9069 18.9989 31.9069C18.7076 31.9069 18.4283 31.7916 18.2223 31.5865C18.0164 31.3814 17.9006 31.1032 17.9006 30.8131V21.1531C17.0643 20.9153 16.3285 20.4126 15.8046 19.7211C15.2808 19.0296 14.9974 18.1869 14.9974 17.3206C14.9974 16.4544 15.2808 15.6117 15.8046 14.9202C16.3285 14.2286 17.0643 13.7259 17.9006 13.4881V7.68359C17.9006 7.39351 18.0164 7.11531 18.2223 6.9102C18.4283 6.70508 18.7076 6.58984 18.9989 6.58984C19.2901 6.58984 19.5694 6.70508 19.7754 6.9102C19.9814 7.11531 20.0971 7.39351 20.0971 7.68359V14.4287C20.0971 14.7188 19.9814 14.997 19.7754 15.2021C19.5694 15.4073 19.2901 15.5225 18.9989 15.5225C18.5279 15.5341 18.0801 15.7285 17.7511 16.0644C17.4221 16.4002 17.2379 16.8509 17.2379 17.3201C17.2379 17.7893 17.4221 18.2399 17.7511 18.5758C18.0801 18.9116 18.5279 19.1061 18.9989 19.1177C19.2901 19.1177 19.5694 19.2329 19.7754 19.438C19.9814 19.6431 20.0971 19.9213 20.0971 20.2114V29.8714C20.9334 30.1092 21.6692 30.6119 22.1931 31.3035C22.7169 31.995 23.0003 32.8376 23.0003 33.7039C23.0003 34.5702 22.7169 35.4128 22.1931 36.1044C21.6692 36.7959 20.9334 37.2986 20.0971 37.5364V45.2692C20.0971 45.5593 19.9814 45.8375 19.7754 46.0426C19.5694 46.2477 19.2901 46.363 18.9989 46.363ZM18.9989 4.38375C18.7076 4.38375 18.4283 4.26852 18.2223 4.0634C18.0164 3.85828 17.9006 3.58008 17.9006 3.29V1.09375C17.9006 0.803669 18.0164 0.52547 18.2223 0.320352C18.4283 0.115234 18.7076 0 18.9989 0C19.2901 0 19.5694 0.115234 19.7754 0.320352C19.9814 0.52547 20.0971 0.803669 20.0971 1.09375V3.29C20.0971 3.58008 19.9814 3.85828 19.7754 4.0634C19.5694 4.26852 19.2901 4.38375 18.9989 4.38375ZM34.7086 10.8642C34.4917 10.8637 34.2797 10.7993 34.0995 10.6789C33.9192 10.5586 33.7789 10.3877 33.696 10.188C33.6132 9.98825 33.5916 9.76855 33.6341 9.55662C33.6765 9.34468 33.781 9.15002 33.9344 8.99719L35.4939 7.44406C35.5942 7.33564 35.7155 7.24855 35.8505 7.18802C35.9855 7.12748 36.1314 7.09476 36.2794 7.09181C36.4274 7.08886 36.5745 7.11574 36.7118 7.17085C36.8491 7.22596 36.9739 7.30815 37.0785 7.41249C37.1831 7.51682 37.2654 7.64114 37.3206 7.77798C37.3757 7.91482 37.4025 8.06135 37.3993 8.20876C37.3961 8.35618 37.3631 8.50143 37.3021 8.63579C37.2411 8.77015 37.1535 8.89085 37.0445 8.99062L35.4851 10.5437C35.2792 10.7489 34.9999 10.8642 34.7086 10.8642ZM3.29456 10.8642C3.14973 10.865 3.0062 10.8371 2.87232 10.7821C2.73845 10.7271 2.61692 10.6461 2.51483 10.5437L0.955385 8.99062C0.850496 8.88973 0.766832 8.76904 0.709277 8.6356C0.651721 8.50216 0.621426 8.35863 0.620159 8.21341C0.618892 8.06818 0.646678 7.92416 0.701897 7.78974C0.757115 7.65532 0.83866 7.5332 0.941773 7.4305C1.04489 7.32781 1.1675 7.2466 1.30247 7.1916C1.43743 7.13661 1.58204 7.10893 1.72786 7.11019C1.87368 7.11146 2.01779 7.14163 2.15177 7.19895C2.28576 7.25627 2.40694 7.3396 2.50824 7.44406L4.0633 8.99719C4.21638 9.14969 4.32079 9.34385 4.3634 9.55528C4.406 9.76671 4.3849 9.98596 4.30275 10.1855C4.2206 10.385 4.08106 10.5559 3.90168 10.6766C3.7223 10.7974 3.51107 10.8627 3.29456 10.8642Z"
          fill={color || "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_174_6654">
          <rect width={width || "74"} height={height || "85"} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconTwo;
