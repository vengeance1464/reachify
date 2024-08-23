import React from "react";

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="487.5pt"
      height="119.999999pt"
      viewBox="0 0 487.5 119.999999"
      version="1.2"
    >
      <defs>
        <g>
          <symbol overflow="visible" id="glyph0-0">
            <path
              style={{ stroke: "none" }}
              d="M 6.21875 13.671875 L 6.21875 2.734375 L 56.921875 2.734375 L 56.921875 13.671875 Z M 6.21875 -1.359375 L 6.21875 -12.296875 L 56.921875 -12.296875 L 56.921875 -1.359375 Z M 6.21875 -16.40625 L 6.21875 -27.34375 L 56.921875 -27.34375 L 56.921875 -16.40625 Z M 6.21875 -31.4375 L 6.21875 -42.375 L 56.921875 -42.375 L 56.921875 -31.4375 Z M 6.21875 -46.46875 L 6.21875 -57.40625 L 56.921875 -57.40625 L 56.921875 -46.46875 Z M 6.21875 -46.46875 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-1">
            <path
              style={{ stroke: "none" }}
              d="M 2.140625 -36.109375 L 2.140625 -43.734375 L 38.0625 -43.734375 L 38.0625 -36.109375 L 24.671875 -36.109375 L 24.671875 0 L 15.53125 0 L 15.53125 -36.109375 Z M 2.140625 -36.109375 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-2">
            <path
              style={{ stroke: "none" }}
              d="M 18.578125 0.640625 C 15.222656 0.640625 12.328125 -0.046875 9.890625 -1.421875 C 7.453125 -2.796875 5.578125 -4.742188 4.265625 -7.265625 C 2.960938 -9.796875 2.3125 -12.789062 2.3125 -16.25 C 2.3125 -19.625 2.960938 -22.582031 4.265625 -25.125 C 5.578125 -27.675781 7.425781 -29.664062 9.8125 -31.09375 C 12.195312 -32.519531 15 -33.234375 18.21875 -33.234375 C 21.101562 -33.234375 23.707031 -32.617188 26.03125 -31.390625 C 28.363281 -30.171875 30.210938 -28.320312 31.578125 -25.84375 C 32.953125 -23.375 33.640625 -20.285156 33.640625 -16.578125 L 33.640625 -14.078125 L 11.296875 -14.078125 L 11.296875 -14.046875 C 11.296875 -11.597656 11.960938 -9.671875 13.296875 -8.265625 C 14.640625 -6.859375 16.453125 -6.15625 18.734375 -6.15625 C 20.253906 -6.15625 21.566406 -6.472656 22.671875 -7.109375 C 23.785156 -7.753906 24.570312 -8.703125 25.03125 -9.953125 L 33.4375 -9.390625 C 32.800781 -6.347656 31.179688 -3.914062 28.578125 -2.09375 C 25.972656 -0.269531 22.640625 0.640625 18.578125 0.640625 Z M 11.296875 -19.71875 L 25.078125 -19.71875 C 25.054688 -21.664062 24.425781 -23.269531 23.1875 -24.53125 C 21.945312 -25.800781 20.335938 -26.4375 18.359375 -26.4375 C 16.335938 -26.4375 14.679688 -25.78125 13.390625 -24.46875 C 12.097656 -23.164062 11.398438 -21.582031 11.296875 -19.71875 Z M 11.296875 -19.71875 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-3">
            <path
              style={{ stroke: "none" }}
              d="M 30.921875 -23.453125 L 22.59375 -22.9375 C 22.363281 -23.988281 21.785156 -24.890625 20.859375 -25.640625 C 19.941406 -26.398438 18.691406 -26.78125 17.109375 -26.78125 C 15.703125 -26.78125 14.507812 -26.484375 13.53125 -25.890625 C 12.550781 -25.304688 12.070312 -24.519531 12.09375 -23.53125 C 12.070312 -22.75 12.378906 -22.085938 13.015625 -21.546875 C 13.648438 -21.003906 14.726562 -20.570312 16.25 -20.25 L 22.1875 -19.046875 C 28.5 -17.753906 31.660156 -14.796875 31.671875 -10.171875 C 31.671875 -8.015625 31.039062 -6.125 29.78125 -4.5 C 28.519531 -2.882812 26.789062 -1.625 24.59375 -0.71875 C 22.40625 0.1875 19.894531 0.640625 17.0625 0.640625 C 12.71875 0.640625 9.253906 -0.265625 6.671875 -2.078125 C 4.097656 -3.898438 2.597656 -6.375 2.171875 -9.5 L 11.125 -9.96875 C 11.40625 -8.632812 12.0625 -7.625 13.09375 -6.9375 C 14.132812 -6.257812 15.460938 -5.921875 17.078125 -5.921875 C 18.679688 -5.921875 19.96875 -6.234375 20.9375 -6.859375 C 21.914062 -7.484375 22.410156 -8.28125 22.421875 -9.25 C 22.378906 -10.875 20.976562 -11.960938 18.21875 -12.515625 L 12.53125 -13.640625 C 6.1875 -14.910156 3.023438 -18.035156 3.046875 -23.015625 C 3.035156 -26.179688 4.300781 -28.675781 6.84375 -30.5 C 9.382812 -32.320312 12.753906 -33.234375 16.953125 -33.234375 C 21.097656 -33.234375 24.363281 -32.359375 26.75 -30.609375 C 29.132812 -28.859375 30.523438 -26.472656 30.921875 -23.453125 Z M 30.921875 -23.453125 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-4">
            <path
              style={{ stroke: "none" }}
              d="M 21.078125 -32.796875 L 21.078125 -25.96875 L 14.90625 -25.96875 L 14.90625 -10.078125 C 14.90625 -8.828125 15.1875 -7.976562 15.75 -7.53125 C 16.320312 -7.09375 17.066406 -6.875 17.984375 -6.875 C 18.410156 -6.875 18.835938 -6.910156 19.265625 -6.984375 C 19.691406 -7.066406 20.019531 -7.128906 20.25 -7.171875 L 21.671875 -0.40625 C 21.222656 -0.257812 20.582031 -0.09375 19.75 0.09375 C 18.925781 0.289062 17.925781 0.410156 16.75 0.453125 C 13.4375 0.585938 10.78125 -0.128906 8.78125 -1.703125 C 6.78125 -3.273438 5.789062 -5.671875 5.8125 -8.890625 L 5.8125 -25.96875 L 1.328125 -25.96875 L 1.328125 -32.796875 L 5.8125 -32.796875 L 5.8125 -40.65625 L 14.90625 -40.65625 L 14.90625 -32.796875 Z M 21.078125 -32.796875 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-5">
            <path
              style={{ stroke: "none" }}
              d="M 3.625 0 L 3.625 -32.796875 L 12.734375 -32.796875 L 12.734375 0 Z M 7.75 -37.03125 C 6.414062 -37.03125 5.265625 -37.484375 4.296875 -38.390625 C 3.328125 -39.296875 2.84375 -40.378906 2.84375 -41.640625 C 2.84375 -42.910156 3.328125 -43.992188 4.296875 -44.890625 C 5.265625 -45.785156 6.414062 -46.234375 7.75 -46.234375 C 9.101562 -46.234375 10.265625 -45.785156 11.234375 -44.890625 C 12.203125 -43.992188 12.6875 -42.910156 12.6875 -41.640625 C 12.6875 -40.378906 12.203125 -39.296875 11.234375 -38.390625 C 10.265625 -37.484375 9.101562 -37.03125 7.75 -37.03125 Z M 7.75 -37.03125 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-6">
            <path
              style={{ stroke: "none" }}
              d="M 3.625 0 L 3.625 -32.796875 L 12.296875 -32.796875 L 12.296875 -27.015625 L 12.6875 -27.015625 C 13.375 -28.953125 14.515625 -30.472656 16.109375 -31.578125 C 17.710938 -32.679688 19.617188 -33.234375 21.828125 -33.234375 C 24.078125 -33.234375 25.988281 -32.671875 27.5625 -31.546875 C 29.144531 -30.429688 30.203125 -28.921875 30.734375 -27.015625 L 31.078125 -27.015625 C 31.742188 -28.890625 32.957031 -30.394531 34.71875 -31.53125 C 36.476562 -32.664062 38.5625 -33.234375 40.96875 -33.234375 C 44.019531 -33.234375 46.503906 -32.257812 48.421875 -30.3125 C 50.335938 -28.375 51.296875 -25.625 51.296875 -22.0625 L 51.296875 0 L 42.21875 0 L 42.21875 -20.265625 C 42.21875 -22.085938 41.734375 -23.453125 40.765625 -24.359375 C 39.796875 -25.273438 38.585938 -25.734375 37.140625 -25.734375 C 35.484375 -25.734375 34.191406 -25.207031 33.265625 -24.15625 C 32.347656 -23.101562 31.890625 -21.726562 31.890625 -20.03125 L 31.890625 0 L 23.0625 0 L 23.0625 -20.453125 C 23.0625 -22.066406 22.601562 -23.347656 21.6875 -24.296875 C 20.769531 -25.253906 19.5625 -25.734375 18.0625 -25.734375 C 16.550781 -25.734375 15.285156 -25.179688 14.265625 -24.078125 C 13.242188 -22.972656 12.734375 -21.507812 12.734375 -19.6875 L 12.734375 0 Z M 3.625 0 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-7">
            <path
              style={{ stroke: "none" }}
              d="M 18.453125 0.640625 C 15.128906 0.640625 12.257812 -0.0664062 9.84375 -1.484375 C 7.4375 -2.898438 5.578125 -4.878906 4.265625 -7.421875 C 2.960938 -9.960938 2.3125 -12.914062 2.3125 -16.28125 C 2.3125 -19.664062 2.960938 -22.628906 4.265625 -25.171875 C 5.578125 -27.710938 7.4375 -29.691406 9.84375 -31.109375 C 12.257812 -32.523438 15.128906 -33.234375 18.453125 -33.234375 C 21.765625 -33.234375 24.628906 -32.523438 27.046875 -31.109375 C 29.460938 -29.691406 31.320312 -27.710938 32.625 -25.171875 C 33.9375 -22.628906 34.59375 -19.664062 34.59375 -16.28125 C 34.59375 -12.914062 33.9375 -9.960938 32.625 -7.421875 C 31.320312 -4.878906 29.460938 -2.898438 27.046875 -1.484375 C 24.628906 -0.0664062 21.765625 0.640625 18.453125 0.640625 Z M 18.5 -6.40625 C 20.75 -6.40625 22.453125 -7.34375 23.609375 -9.21875 C 24.765625 -11.101562 25.34375 -13.476562 25.34375 -16.34375 C 25.34375 -19.195312 24.765625 -21.566406 23.609375 -23.453125 C 22.453125 -25.347656 20.75 -26.296875 18.5 -26.296875 C 16.207031 -26.296875 14.472656 -25.347656 13.296875 -23.453125 C 12.128906 -21.566406 11.546875 -19.195312 11.546875 -16.34375 C 11.546875 -13.476562 12.128906 -11.101562 13.296875 -9.21875 C 14.472656 -7.34375 16.207031 -6.40625 18.5 -6.40625 Z M 18.5 -6.40625 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-8">
            <path
              style={{ stroke: "none" }}
              d="M 12.734375 -18.96875 L 12.734375 0 L 3.625 0 L 3.625 -32.796875 L 12.296875 -32.796875 L 12.296875 -27.015625 L 12.6875 -27.015625 C 13.425781 -28.921875 14.644531 -30.429688 16.34375 -31.546875 C 18.050781 -32.671875 20.117188 -33.234375 22.546875 -33.234375 C 25.960938 -33.234375 28.703125 -32.128906 30.765625 -29.921875 C 32.835938 -27.722656 33.875 -24.710938 33.875 -20.890625 L 33.875 0 L 24.78125 0 L 24.78125 -19.265625 C 24.789062 -21.273438 24.273438 -22.84375 23.234375 -23.96875 C 22.191406 -25.101562 20.757812 -25.671875 18.9375 -25.671875 C 17.101562 -25.671875 15.613281 -25.082031 14.46875 -23.90625 C 13.320312 -22.726562 12.742188 -21.082031 12.734375 -18.96875 Z M 12.734375 -18.96875 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-9">
            <path
              style={{ stroke: "none" }}
              d="M 12.984375 0.625 C 9.847656 0.625 7.25 -0.191406 5.1875 -1.828125 C 3.125 -3.472656 2.09375 -5.914062 2.09375 -9.15625 C 2.09375 -11.601562 2.664062 -13.523438 3.8125 -14.921875 C 4.96875 -16.316406 6.484375 -17.335938 8.359375 -17.984375 C 10.234375 -18.640625 12.253906 -19.066406 14.421875 -19.265625 C 17.265625 -19.546875 19.296875 -19.84375 20.515625 -20.15625 C 21.742188 -20.46875 22.359375 -21.15625 22.359375 -22.21875 L 22.359375 -22.34375 C 22.359375 -23.695312 21.929688 -24.742188 21.078125 -25.484375 C 20.234375 -26.222656 19.035156 -26.59375 17.484375 -26.59375 C 15.847656 -26.59375 14.546875 -26.234375 13.578125 -25.515625 C 12.609375 -24.804688 11.96875 -23.90625 11.65625 -22.8125 L 3.25 -23.5 C 3.875 -26.488281 5.425781 -28.859375 7.90625 -30.609375 C 10.394531 -32.359375 13.601562 -33.234375 17.53125 -33.234375 C 19.96875 -33.234375 22.242188 -32.847656 24.359375 -32.078125 C 26.484375 -31.304688 28.195312 -30.101562 29.5 -28.46875 C 30.800781 -26.84375 31.453125 -24.726562 31.453125 -22.125 L 31.453125 0 L 22.828125 0 L 22.828125 -4.546875 L 22.578125 -4.546875 C 21.773438 -3.023438 20.578125 -1.78125 18.984375 -0.8125 C 17.398438 0.144531 15.398438 0.625 12.984375 0.625 Z M 15.59375 -5.65625 C 17.582031 -5.65625 19.21875 -6.234375 20.5 -7.390625 C 21.78125 -8.554688 22.421875 -10 22.421875 -11.71875 L 22.421875 -15.203125 C 22.066406 -14.960938 21.515625 -14.75 20.765625 -14.5625 C 20.015625 -14.375 19.21875 -14.210938 18.375 -14.078125 C 17.53125 -13.941406 16.773438 -13.828125 16.109375 -13.734375 C 14.515625 -13.503906 13.226562 -13.054688 12.25 -12.390625 C 11.269531 -11.722656 10.78125 -10.75 10.78125 -9.46875 C 10.78125 -8.207031 11.234375 -7.253906 12.140625 -6.609375 C 13.046875 -5.972656 14.195312 -5.65625 15.59375 -5.65625 Z M 15.59375 -5.65625 "
            />
          </symbol>
          <symbol overflow="visible" id="glyph0-10">
            <path
              style={{ stroke: "none" }}
              d="M 12.734375 -43.734375 L 12.734375 0 L 3.625 0 L 3.625 -43.734375 Z M 12.734375 -43.734375 "
            />
          </symbol>
        </g>
        <clipPath id="clip1">
          <path d="M 12 13.96875 L 104.25 13.96875 L 104.25 106.21875 L 12 106.21875 Z M 12 13.96875 " />
        </clipPath>
      </defs>
      <g id="surface1">
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-1" x="126.367657" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-2" x="166.556276" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-3" x="202.495405" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-4" x="236.277759" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-5" x="259.639264" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-6" x="275.996584" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-7" x="330.834196" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-8" x="367.734269" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-5" x="405.125491" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-9" x="421.482811" y="81.55586" />
        </g>
        <g style={{ fill: "rgb(100%,100%,100%)", fillOpacity: 1 }}>
          <use xmlnsXlink="#glyph0-10" x="456.375591" y="81.55586" />
        </g>
        <g clip-path="url(#clip1)" clip-rule="nonzero">
          <path
            style={{
              stroke: "none",
              fillRule: "nonzero",
              fill: "rgb(36.468506%,36.468506%,100%)",
              fillOpacity: 1,
            }}
            d="M 58.085938 13.941406 C 32.617188 13.941406 11.972656 34.589844 11.972656 60.054688 C 11.972656 85.523438 32.617188 106.167969 58.085938 106.167969 C 83.550781 106.167969 104.199219 85.519531 104.199219 60.054688 C 104.199219 34.589844 83.550781 13.941406 58.085938 13.941406 Z M 46.789062 72.4375 C 46.789062 74.929688 44.769531 76.945312 42.28125 76.945312 C 39.789062 76.945312 37.773438 74.929688 37.773438 72.4375 L 37.773438 53.21875 C 37.773438 50.726562 39.789062 48.707031 42.28125 48.707031 C 44.769531 48.707031 46.789062 50.726562 46.789062 53.21875 Z M 78.632812 72.113281 C 78.632812 75.636719 76.574219 76.898438 73.050781 76.898438 L 56.839844 76.898438 C 53.316406 76.898438 50.460938 74.042969 50.460938 70.519531 L 50.460938 54.574219 C 50.460938 54.574219 50.144531 51.921875 53.082031 49.429688 C 54.742188 48.019531 57.207031 45.328125 58.929688 42.0625 C 62.351562 35.574219 64.398438 33.683594 65.957031 34.191406 C 71.730469 36.0625 68.84375 44.621094 66.980469 48.195312 L 72.253906 48.195312 C 75.773438 48.195312 78.632812 51.050781 78.632812 54.574219 Z M 78.632812 72.113281 "
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;