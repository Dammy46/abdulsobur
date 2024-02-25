
import React from "react";
import variable from './hero.module.scss'

const svg = () => {

    
  const svgText = (
    <svg
      width="800"
      height="150"
      viewBox="0 0 594 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    className={variable.animatedText}
    id="logo"
    >
      <path
        d="M560.391 69.2L544.591 69C544.525 68.0667 544.458 66.9 544.391 65.5C544.391 64.0333 544.391 62.6 544.391 61.2C544.391 57.2 544.825 53.8667 545.691 51.2C546.558 48.5333 548.225 46.3333 550.691 44.6C553.225 42.8 556.991 41.2667 561.991 40C564.858 39.2667 567.225 38.6333 569.091 38.1C570.958 37.5 572.425 36.8333 573.491 36.1C574.558 35.3667 575.291 34.3667 575.691 33.1C576.158 31.7667 576.391 29.9667 576.391 27.7C576.391 22.9 574.491 20 570.691 19C568.825 18.4667 566.358 18.0667 563.291 17.8C560.225 17.5333 557.225 17.4 554.291 17.4C551.825 17.4 549.191 17.5 546.391 17.7C543.591 17.8333 540.958 18.1333 538.491 18.6C536.025 19.0667 534.025 19.8 532.491 20.8C530.958 21.8 530.191 23.1667 530.191 24.9C530.191 26.4333 530.691 28.1 531.691 29.9C532.758 31.6333 534.058 33.1667 535.591 34.5L521.091 42.8C518.825 40.4667 516.991 37.6667 515.591 34.4C514.191 31.1333 513.491 27.6667 513.491 24C513.491 21.6 513.991 19.1333 514.991 16.6C516.058 14.0667 517.791 11.7333 520.191 9.6C522.658 7.4 525.991 5.7 530.191 4.5C533.258 3.56666 536.891 2.86666 541.091 2.39999C545.291 1.86666 549.691 1.6 554.291 1.6C558.225 1.6 562.191 1.83333 566.191 2.3C570.191 2.76666 573.925 3.6 577.391 4.8C583.191 6.8 587.125 9.73333 589.191 13.6C591.325 17.4 592.391 21.9 592.391 27.1C592.391 33.9667 590.958 39.5667 588.091 43.9C585.291 48.2333 580.491 51.1667 573.691 52.7C572.091 53.0333 570.391 53.3333 568.591 53.6C566.791 53.8667 565.191 54.3 563.791 54.9C562.391 55.5 561.458 56.5333 560.991 58C560.458 59.6667 560.191 62.0667 560.191 65.2C560.191 65.8667 560.191 66.5333 560.191 67.2C560.258 67.8667 560.325 68.5333 560.391 69.2ZM552.591 92.1C549.591 92.1 547.258 91.1667 545.591 89.3C543.991 87.4333 543.191 85.2333 543.191 82.7C543.191 79.9667 544.091 77.7 545.891 75.9C547.691 74.0333 549.958 73.1 552.691 73.1C555.558 73.1 557.825 73.9667 559.491 75.7C561.225 77.4333 562.091 79.7333 562.091 82.6C562.091 85.4667 561.225 87.7667 559.491 89.5C557.825 91.2333 555.525 92.1 552.591 92.1Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M461.836 89.9C461.303 86.4333 460.836 82.2333 460.436 77.3C460.103 72.3667 459.836 67 459.636 61.2C459.503 55.4 459.436 49.5 459.436 43.5C459.436 35.9667 459.569 28.6333 459.836 21.5C460.103 14.3667 460.503 8.1 461.036 2.7L479.436 3C478.703 7.73333 478.136 13.3 477.736 19.7C477.403 26.1 477.236 33.3667 477.236 41.5C477.236 49.7667 477.369 58.0667 477.636 66.4C477.969 74.7333 478.336 82.3667 478.736 89.3L461.836 89.9Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M345.183 90.8C345.116 89.8 345.049 88.1333 344.983 85.8C344.916 83.5333 344.849 80.8 344.783 77.6C344.716 74.4 344.683 70.9667 344.683 67.3C344.683 63.5667 344.683 59.8333 344.683 56.1C344.683 51.9667 344.683 48.0333 344.683 44.3C344.749 40.5667 344.783 37.3333 344.783 34.6C344.849 31.8667 344.883 29.9 344.883 28.7L361.783 28.4C361.649 30.2667 361.549 32.5333 361.483 35.2C363.216 32.8667 365.216 31.0333 367.483 29.7C369.749 28.3667 372.349 27.7 375.283 27.7C378.816 27.7 381.716 28.7333 383.983 30.8C386.316 32.8667 388.216 35.5667 389.683 38.9C394.483 31.4333 400.383 27.7 407.383 27.7C411.316 27.7 414.549 28.5667 417.083 30.3C419.683 31.9667 421.716 34.2333 423.183 37.1C424.649 39.9667 425.716 43.2 426.383 46.8C427.116 50.4 427.583 54.1 427.783 57.9C427.983 61.7 428.083 65.3667 428.083 68.9C428.083 73.1 428.016 76.9333 427.883 80.4C427.749 83.8667 427.716 87.1667 427.783 90.3H410.483C410.483 88.7 410.483 86.6667 410.483 84.2C410.483 81.8 410.483 79.3667 410.483 76.9C410.549 74.3667 410.583 72.2 410.583 70.4C410.583 68.5333 410.583 67.4333 410.583 67.1C410.583 63.1 410.483 59.3333 410.283 55.8C410.083 52.2667 409.583 49.4 408.783 47.2C407.983 45 406.683 43.9 404.883 43.9C403.149 43.9 401.616 44.7333 400.283 46.4C398.949 48.0667 397.749 50.2333 396.683 52.9C395.683 55.5667 394.816 58.4 394.083 61.4C394.216 64 394.316 66.6 394.383 69.2C394.449 71.7333 394.483 74.2 394.483 76.6C394.483 79.3333 394.449 81.7 394.383 83.7C394.383 85.7667 394.383 87.9667 394.383 90.3H377.583C377.583 84.9 377.549 80.1333 377.483 76C377.416 71.8667 377.283 67.8667 377.083 64C376.749 57.0667 376.016 52 374.883 48.8C373.816 45.5333 372.316 43.9 370.383 43.9C368.249 43.9 366.449 45.2 364.983 47.8C363.516 50.3333 362.316 53.4333 361.383 57.1C361.449 62.4333 361.583 68 361.783 73.8C361.983 79.6 362.249 85.2 362.583 90.6L345.183 90.8Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M272.666 90.1L255.566 86.9C258.766 73.9667 262.1 62.2667 265.566 51.8C269.1 41.3333 272.733 32.3667 276.466 24.9C280.2 17.4333 284 11.7 287.866 7.7C291.8 3.63333 295.733 1.6 299.666 1.6C307.6 1.6 314.9 8.96666 321.566 23.7C328.233 38.3667 333.9 59.6333 338.566 87.5L320.866 89.9C320.066 85.5 319.2 81 318.266 76.4C317.333 71.7333 316.366 67.2 315.366 62.8C313.766 62.7333 312.033 62.7 310.166 62.7C306.9 62.7 303.433 62.7667 299.766 62.9C296.166 63.0333 292.6 63.2667 289.066 63.6C285.6 63.8667 282.366 64.1667 279.366 64.5C278.1 68.7667 276.866 73.1 275.666 77.5C274.533 81.8333 273.533 86.0333 272.666 90.1ZM291.066 31.7C289.6 34.8333 287.633 39.9 285.166 46.9C288.033 46.5667 291.066 46.3333 294.266 46.2C297.466 46 300.6 45.9 303.666 45.9C306.266 45.9 308.766 45.9667 311.166 46.1C310.233 42.7 309.333 39.6667 308.466 37C307.666 34.3333 306.933 32.2333 306.266 30.7C304.866 27.1 303.633 24.5667 302.566 23.1C301.5 21.5667 300.4 20.8 299.266 20.8C298.066 20.8 296.866 21.6 295.666 23.2C294.466 24.7333 292.933 27.5667 291.066 31.7Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M195.977 91.2C190.643 91.2 185.977 90.3333 181.977 88.6C178.043 86.8667 174.777 84.5 172.177 81.5C169.577 78.4333 167.643 74.9333 166.377 71C165.11 67.0667 164.477 62.9333 164.477 58.6C164.477 54.2 165.243 50.1333 166.777 46.4C168.377 42.6 170.543 39.3 173.277 36.5C176.077 33.7 179.343 31.5333 183.077 30C186.81 28.4 190.877 27.6 195.277 27.6C199.877 27.6 204.143 28.4 208.077 30C212.01 31.6 215.443 33.8333 218.377 36.7C221.31 39.5667 223.577 42.9333 225.177 46.8C226.843 50.6667 227.677 54.8667 227.677 59.4C227.677 69.4667 224.91 77.3 219.377 82.9C213.843 88.4333 206.043 91.2 195.977 91.2ZM195.877 75C200.743 75 204.443 73.6333 206.977 70.9C209.577 68.1667 210.877 64.2333 210.877 59.1C210.877 54.5 209.477 50.8 206.677 48C203.877 45.2 200.21 43.8 195.677 43.8C192.943 43.8 190.443 44.5333 188.177 46C185.91 47.4 184.077 49.3 182.677 51.7C181.343 54.0333 180.677 56.6333 180.677 59.5C180.677 62.0333 181.177 64.5 182.177 66.9C183.243 69.3 184.91 71.2667 187.177 72.8C189.443 74.2667 192.343 75 195.877 75Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M100.754 89.9C100.754 85.8333 100.754 80.6333 100.754 74.3C100.821 67.9 100.887 60.8 100.954 53C101.087 45.2 101.254 37 101.454 28.4C101.721 19.8 102.021 11.2 102.354 2.6L119.354 2.49999C119.087 6.3 118.821 10.9333 118.554 16.4C118.287 21.8667 118.054 27.7333 117.854 34C122.454 29.7333 127.721 27.6 133.654 27.6C137.721 27.6 141.087 28.3333 143.754 29.8C146.487 31.2667 148.687 33.2 150.354 35.6C152.021 37.9333 153.287 40.5 154.154 43.3C155.021 46.1 155.621 48.8667 155.954 51.6C156.287 54.2667 156.454 56.6333 156.454 58.7C156.454 63.1 156.421 67.4667 156.354 71.8C156.287 76.1333 156.221 79.9333 156.154 83.2C156.154 86.4667 156.154 88.7667 156.154 90.1L138.654 90.2C138.921 87.6 139.087 84.6 139.154 81.2C139.287 77.8 139.354 74.3 139.354 70.7C139.421 67.0333 139.454 63.5667 139.454 60.3C139.454 49.5 136.921 44.1 131.854 44.1C130.321 44.1 128.621 44.5 126.754 45.3C124.887 46.1 123.087 47.3667 121.354 49.1C119.687 50.8333 118.354 53.1333 117.354 56C117.287 60.4 117.254 64.6667 117.254 68.8C117.254 72.6 117.287 76.1667 117.354 79.5C117.487 82.7667 117.587 86.0667 117.654 89.4L100.754 89.9Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M28.3 91C25.0333 91 21.9 89.0667 18.9 85.2C15.9667 81.4 13.6 76.3 11.8 69.9C10.5333 65.1667 9.23335 59.4667 7.90001 52.8C6.63335 46.1333 5.46668 38.6333 4.40001 30.3C3.40001 21.9667 2.66668 13 2.20001 3.39999L19.4 2.6C19.7333 8.8 20.1667 14.9333 20.7 21C21.3 27.0667 21.9667 32.8 22.7 38.2C23.4333 43.6 24.2 48.4667 25 52.8C25.8667 57.0667 26.7 60.5333 27.5 63.2C27.7 63.8 27.8333 64.2667 27.9 64.6C28.0333 64.9333 28.1333 65.1667 28.2 65.3C28.2667 65.0333 28.3667 64.6 28.5 64C28.7 63.4 28.9 62.7667 29.1 62.1C30.1 58.5667 31.2 53.9 32.4 48.1C33.6667 42.3 34.8333 35.8 35.9 28.6C36.9667 21.4 37.8 13.9333 38.4 6.2C38.3333 5.66667 38.3 5.13333 38.3 4.59999L56.1 4.5C56.7 14.5667 57.4667 23.2333 58.4 30.5C59.3333 37.7667 60.3333 43.9667 61.4 49.1C62.5333 54.1667 63.5667 58.5 64.5 62.1C64.5667 62.3 64.6333 62.6 64.7 63C64.8333 63.3333 64.9333 63.6667 65 64C65.1333 63.6667 65.2667 63.2667 65.4 62.8C65.5333 62.2667 65.6667 61.7 65.8 61.1C66.6 58.2333 67.4 54.6333 68.2 50.3C69.0667 45.9 69.8667 41.0667 70.6 35.8C71.4 30.5333 72.1 25.1 72.7 19.5C73.3667 13.9 73.9334 8.46666 74.4 3.2H92C91.7334 7.6 91.2667 12.3 90.6 17.3C90 22.3 89.3 27.3667 88.5 32.5C87.7 37.6333 86.8334 42.6 85.9 47.4C85.0334 52.1333 84.1334 56.5 83.2 60.5C82.3334 64.5 81.5334 67.8333 80.8 70.5C79 76.9 76.7 81.9 73.9 85.5C71.1667 89.1 68.2333 90.9 65.1 90.9C61.8333 90.9 59.0333 89.5333 56.7 86.8C54.4333 84.0667 52.1333 79.4333 49.8 72.9C49.2 71.2333 48.5667 69.1333 47.9 66.6C47.3 64.0667 46.6667 61.2667 46 58.2C45.1333 61.9333 44.3 65.3 43.5 68.3C42.7667 71.2333 42.1 73.6333 41.5 75.5C40.2333 79.3667 38.9667 82.4333 37.7 84.7C36.4333 86.9667 35.0667 88.5667 33.6 89.5C32.1333 90.5 30.3667 91 28.3 91Z"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
  return {
    svgText
  };
};

export default svg;