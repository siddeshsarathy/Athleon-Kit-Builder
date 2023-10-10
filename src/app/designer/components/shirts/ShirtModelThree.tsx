import { Colors, ShirtModels } from '@/models'
import clsx from 'clsx'

interface Props {
  className: string
  shirtModel?: ShirtModels
  shirtModelColor?: Colors
}

function ShirtModelThree({ className, shirtModel, shirtModelColor }: Props) {
  const classes = clsx(
    'opacity-0',
    shirtModel === 'three' && 'opacity-100',
    shirtModelColor === 'yellow' && 'fill-yellow-500',
    shirtModelColor === 'red' && 'fill-red-500',
    shirtModelColor === 'blue' && 'fill-blue-500',
    shirtModelColor === 'green' && 'fill-green-500',
    shirtModelColor === 'orange' && 'fill-orange-500',
    shirtModelColor === 'violet' && 'fill-violet-500',
    shirtModelColor === 'gray' && 'fill-gray-500',
    shirtModelColor === 'black' && 'fill-black',
    shirtModelColor === 'white' && 'fill-white',
    shirtModelColor === 'cyan' && 'fill-cyan-500',
    shirtModelColor === 'pink' && 'fill-pink-500',
    shirtModelColor === 'lime' && 'fill-lime-500',
    className
  )

  return (
    <svg className={classes} viewBox='0 0 1414 792' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d='M118.522 323.14C117.774 327.192 115.901 329.331 114.885 331.265C112.085 336.637 112.026 339.502 110.85 341.426C110.143 342.603 108.977 343.513 107.632 343.534C77.1744 344.045 27.6875 326.568 10.6106 316.817C10.1424 316.551 6.7549 314.289 6.32649 314.044C0.139369 310.432 -0.727418 307.546 0.448233 303.095C1.03606 300.854 2.4807 299.851 3.79584 293.835C4.21429 291.921 4.03495 288.309 5.56928 287.695C6.60544 288.565 7.82096 289.404 9.22577 290.223C9.72392 290.519 10.2719 290.785 10.79 291.113C25.2067 300.23 71.9338 319.129 118.512 323.14H118.522Z'
          fill='black'
        />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d='M915.972 323.14C915.224 327.192 913.351 329.331 912.335 331.265C909.536 336.637 909.476 339.502 908.3 341.426C907.593 342.603 906.427 343.513 905.082 343.534C874.625 344.045 825.138 326.568 808.061 316.817C807.593 316.551 804.205 314.289 803.777 314.044C797.589 310.432 796.723 307.546 797.898 303.095C798.486 300.854 799.931 299.851 801.246 293.835C801.664 291.921 801.485 288.309 803.019 287.695C804.056 288.565 805.271 289.404 806.676 290.223C807.174 290.519 807.722 290.785 808.24 291.113C822.657 300.23 869.384 319.129 915.962 323.14H915.972Z'
          fill='black'
        />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <mask
          id='mask0_39_1916'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x='5'
          y='62'
          width='123'
          height='262'
        >
          <path
            d='M68.1977 71.3712C71.9239 68.414 75.8992 65.5592 80.014 62.9294C74.7435 68.281 73.4782 77.0297 76.6465 84.0696C77.0251 84.9292 77.4335 85.8296 77.852 86.7915C77.8819 86.8631 77.9217 86.9347 77.9516 86.9961C91.2325 116.987 119.797 184.89 127.13 300.803C124.978 306.103 123.294 309.357 120.923 315.619C120.375 317.072 120.444 321.442 118.532 323.14C78.9977 320.613 28.1159 301.898 10.8099 291.113C10.2819 290.785 9.74388 290.509 9.24572 290.223C7.83095 289.404 6.62543 288.565 5.58926 287.695C4.97155 284.39 7.62173 283.459 8.21952 281.331C17.1465 249.804 26.6812 225.605 30.0787 196.002C38.6669 121.009 43.0407 98.7941 60.0678 79.4855C62.0405 77.2548 66.0058 73.1209 68.1977 71.3814V71.3712Z'
            fill='white'
          />
        </mask>
        <g mask='url(#mask0_39_1916)'>
          <path
            d='M215.629 -186.758L-69.5371 919.379L-4.94981 936.942L280.216 -169.195L215.629 -186.758Z'
            fill='black'
          />
          <path
            d='M98.1173 -218.728L-187.049 887.409L-122.462 904.972L162.705 -201.165L98.1173 -218.728Z'
            fill='black'
          />
        </g>
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <mask
          id='mask1_39_1916'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x='489'
          y='62'
          width='123'
          height='262'
        >
          <path
            d='M548.312 71.3712C544.586 68.414 540.61 65.5592 536.496 62.9294C541.766 68.281 543.031 77.0297 539.863 84.0696C539.485 84.9292 539.076 85.8296 538.658 86.7915C538.628 86.8631 538.588 86.9347 538.558 86.9961C525.277 116.987 496.713 184.89 489.38 300.803C491.532 306.103 493.216 309.357 495.587 315.619C496.135 317.072 496.065 321.442 497.978 323.14C537.512 320.613 588.394 301.898 605.7 291.113C606.228 290.785 606.766 290.509 607.264 290.223C608.679 289.404 609.884 288.565 610.92 287.695C611.538 284.39 608.888 283.459 608.29 281.331C599.363 249.804 589.828 225.605 586.431 196.002C577.843 121.009 573.469 98.7941 556.442 79.4855C554.469 77.2548 550.504 73.1209 548.312 71.3814V71.3712Z'
            fill='white'
          />
        </mask>
        <g mask='url(#mask1_39_1916)'>
          <path d='M400.842 -186.66L336.255 -169.097L621.421 937.04L686.008 919.477L400.842 -186.66Z' fill='black' />
          <path d='M518.355 -218.605L453.768 -201.042L738.934 905.095L803.522 887.532L518.355 -218.605Z' fill='black' />
        </g>
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d='M1295.43 323.14C1296.18 327.192 1298.05 329.331 1299.06 331.265C1301.86 336.637 1301.92 339.502 1303.1 341.426C1303.81 342.603 1304.97 343.513 1306.32 343.534C1336.78 344.045 1386.26 326.568 1403.34 316.817C1403.81 316.551 1407.19 314.289 1407.62 314.044C1413.81 310.432 1414.68 307.546 1413.5 303.095C1412.91 300.854 1411.47 299.851 1410.15 293.835C1409.74 291.921 1409.91 288.309 1408.38 287.695C1407.34 288.565 1406.13 289.404 1404.72 290.223C1404.23 290.519 1403.68 290.785 1403.16 291.113C1388.74 300.23 1342.02 319.129 1295.44 323.14H1295.43Z'
          fill='black'
        />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d='M497.978 323.14C498.725 327.192 500.598 329.331 501.615 331.265C504.414 336.637 504.474 339.502 505.65 341.426C506.357 342.603 507.523 343.513 508.868 343.534C539.325 344.045 588.812 326.568 605.889 316.817C606.357 316.551 609.745 314.289 610.173 314.044C616.36 310.432 617.227 307.546 616.051 303.095C615.463 300.854 614.019 299.851 612.704 293.835C612.285 291.921 612.465 288.309 610.93 287.695C609.894 288.565 608.679 289.404 607.274 290.223C606.776 290.519 606.228 290.785 605.71 291.113C591.293 300.23 544.566 319.129 497.988 323.14H497.978Z'
          fill='black'
        />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d='M446.578 728.723C442.025 728.314 437.452 727.945 432.949 727.7C422.776 727.168 413.242 727.485 407.722 727.771V748.502C413.242 748.206 422.776 747.888 432.949 748.42C437.452 748.656 442.025 749.034 446.578 749.444C453.573 750.078 460.537 750.764 467.252 751.122V730.391C460.537 730.043 453.573 729.347 446.578 728.723ZM409.765 738.475C412.803 738.331 416.868 738.209 421.441 738.209C425.407 738.209 429.263 738.301 432.889 738.495C437.402 738.73 442.025 739.119 446.578 739.529V747.346C442.085 746.937 437.522 746.558 433.058 746.333C429.362 746.139 425.457 746.036 421.431 746.036C416.769 746.036 412.644 746.169 409.765 746.302V738.475ZM409.765 729.777C412.634 729.644 416.779 729.511 421.441 729.511C425.387 729.511 429.223 729.603 432.849 729.798C437.372 730.033 442.015 730.422 446.578 730.831V738.689C442.025 738.28 437.402 737.902 432.889 737.656C429.263 737.472 425.407 737.37 421.441 737.37C416.868 737.37 412.803 737.503 409.765 737.636V729.777Z'
          fill='#3E414D'
        />
        <path
          d='M450.185 730.289C448.989 730.176 447.784 730.074 446.578 729.962C442.025 729.552 437.402 729.163 432.889 728.928C429.262 728.734 425.407 728.642 421.441 728.642C416.43 728.642 412.026 728.795 408.917 728.949V747.213C412.036 747.06 416.44 746.906 421.431 746.906C425.436 746.906 429.342 747.009 433.008 747.193C437.492 747.428 442.075 747.817 446.578 748.216C447.863 748.329 449.129 748.452 450.394 748.564C455.585 749.035 460.935 749.526 466.056 749.823V731.558C460.855 731.261 455.435 730.77 450.185 730.289ZM409.764 729.777C412.634 729.644 416.778 729.511 421.441 729.511C425.387 729.511 429.222 729.603 432.849 729.798C437.372 730.033 442.015 730.422 446.578 730.831V738.69C442.025 738.281 437.402 737.902 432.889 737.656C429.262 737.472 425.407 737.37 421.441 737.37C416.868 737.37 412.803 737.503 409.764 737.636V729.777ZM433.058 746.334C429.362 746.139 425.456 746.037 421.431 746.037C416.768 746.037 412.644 746.17 409.764 746.303V738.475C412.803 738.332 416.868 738.209 421.441 738.209C425.407 738.209 429.262 738.301 432.889 738.495C437.402 738.731 442.025 739.12 446.578 739.529V747.347C442.085 746.937 437.522 746.559 433.058 746.334Z'
          fill='black'
        />
        <path
          d='M465.209 732.376V748.902C460.377 748.605 455.346 748.144 450.474 747.694C449.188 747.582 447.883 747.459 446.578 747.346V739.529C442.025 739.119 437.402 738.73 432.889 738.495C429.262 738.301 425.406 738.209 421.441 738.209C416.868 738.209 412.803 738.331 409.764 738.475V737.636C412.803 737.503 416.868 737.37 421.441 737.37C425.406 737.37 429.262 737.472 432.889 737.656C437.402 737.902 442.025 738.28 446.578 738.689V730.831C447.754 730.933 448.919 731.046 450.085 731.148C455.136 731.609 460.257 732.079 465.209 732.376Z'
          fill='black'
        />
        <path
          d='M446.578 730.831V738.69C442.025 738.28 437.402 737.902 432.889 737.656C429.262 737.472 425.406 737.37 421.441 737.37C416.868 737.37 412.803 737.503 409.764 737.636V729.777C412.634 729.644 416.778 729.511 421.441 729.511C425.386 729.511 429.222 729.603 432.849 729.798C437.372 730.033 442.015 730.422 446.578 730.831Z'
          fill='#3E414D'
        />
        <path
          d='M446.578 739.529V747.346C442.085 746.937 437.522 746.558 433.058 746.333C429.362 746.139 425.456 746.036 421.431 746.036C416.768 746.036 412.644 746.169 409.764 746.302V738.475C412.803 738.331 416.868 738.208 421.441 738.208C425.406 738.208 429.262 738.301 432.889 738.495C437.402 738.73 442.025 739.119 446.578 739.529Z'
          fill='#3E414D'
        />
        <path
          d='M454.957 742.445L452.466 745.003C452.317 744.87 452.167 744.737 452.028 744.594C449.905 742.414 449.557 739.099 450.981 736.551C451.43 736.336 451.928 736.234 452.436 736.234C453.383 736.234 454.269 736.612 454.947 737.298C456.332 738.72 456.332 741.023 454.947 742.445H454.957Z'
          fill='white'
        />
        <path
          d='M455.515 733.297C456.232 733.644 456.89 734.125 457.468 734.719C458.803 736.09 459.55 737.922 459.55 739.866C459.55 741.81 458.813 743.642 457.468 745.013L456.013 746.507C456.591 746.568 457.179 746.537 457.747 746.435L458.305 745.862C459.869 744.255 460.726 742.127 460.726 739.855C460.726 737.584 459.869 735.456 458.305 733.849C458.106 733.644 457.896 733.45 457.677 733.266C456.96 733.143 456.232 733.153 455.515 733.276V733.297Z'
          fill='#999999'
        />
        <path
          d='M456.631 735.579C455.784 734.709 454.748 734.166 453.662 733.931C453.124 734.218 452.626 734.576 452.167 735.016C452.257 735.016 452.357 735.016 452.456 735.016C453.722 735.016 454.907 735.517 455.804 736.438C457.647 738.331 457.647 741.411 455.804 743.304L453.473 745.698C453.841 745.913 454.24 746.087 454.638 746.22L456.641 744.164C458.942 741.8 458.942 737.952 456.641 735.579H456.631Z'
          fill='#999999'
        />
        <path
          d='M461.224 735.149C460.905 734.822 460.556 734.525 460.188 734.279C461.303 735.906 461.911 737.84 461.911 739.866C461.911 741.892 461.313 743.836 460.188 745.453C460.556 745.207 460.905 744.921 461.224 744.583C463.764 741.974 463.764 737.748 461.224 735.139V735.149Z'
          fill='#999999'
        />
        <path
          d='M415.334 734.976C415.344 735.436 415.244 735.774 415.035 736.009C414.826 736.245 414.527 736.357 414.128 736.378C413.71 736.388 413.391 736.286 413.172 736.06C412.953 735.835 412.823 735.498 412.813 735.058C412.773 733.953 412.753 733.4 412.713 732.305C412.694 731.865 412.793 731.517 413.012 731.261C413.232 731.006 413.54 730.873 413.949 730.862C414.357 730.852 414.676 730.965 414.905 731.21C415.134 731.456 415.254 731.794 415.264 732.244L415.344 734.996L415.334 734.976ZM414.547 732.172C414.547 731.957 414.487 731.794 414.387 731.691C414.288 731.579 414.148 731.527 413.959 731.538C413.789 731.538 413.65 731.609 413.56 731.722C413.471 731.835 413.421 731.998 413.431 732.213C413.471 733.359 413.491 733.932 413.53 735.078C413.55 735.508 413.74 735.713 414.108 735.702C414.288 735.702 414.417 735.641 414.507 735.539C414.596 735.436 414.646 735.273 414.636 735.047C414.596 733.901 414.586 733.328 414.547 732.182V732.172Z'
          fill='#999999'
        />
        <path
          d='M417.317 736.234C417.277 734.064 417.257 732.97 417.207 730.8C417.815 730.79 418.114 730.78 418.711 730.77C419.09 730.77 419.359 730.851 419.518 731.046C419.668 731.23 419.748 731.506 419.758 731.844C419.758 732.141 419.758 732.294 419.758 732.591C419.758 732.847 419.718 733.041 419.618 733.195C419.518 733.338 419.389 733.44 419.22 733.481C419.22 733.491 419.22 733.502 419.22 733.512C419.409 733.543 419.548 733.635 419.648 733.768C419.748 733.901 419.787 734.105 419.797 734.382C419.797 735.108 419.807 735.466 419.817 736.193C419.538 736.193 419.399 736.193 419.12 736.193C419.12 735.446 419.11 735.077 419.1 734.33C419.1 734.156 419.06 734.034 419 733.952C418.931 733.87 418.821 733.839 418.642 733.839C418.383 733.839 418.253 733.839 417.994 733.85C418.014 734.791 418.014 735.272 418.034 736.213C417.755 736.213 417.616 736.213 417.337 736.223L417.317 736.234ZM419.05 731.936C419.05 731.762 419.01 731.639 418.941 731.557C418.871 731.476 418.741 731.435 418.572 731.435C418.323 731.435 418.193 731.435 417.944 731.445C417.954 732.161 417.964 732.519 417.974 733.236C418.223 733.236 418.353 733.236 418.602 733.225C418.751 733.225 418.861 733.184 418.941 733.103C419.02 733.021 419.06 732.877 419.06 732.663C419.06 732.376 419.06 732.223 419.06 731.936H419.05Z'
          fill='#999999'
        />
        <path
          d='M421.77 736.193C421.77 734.023 421.77 732.929 421.77 730.759C422.058 730.759 422.208 730.759 422.507 730.759C422.507 732.929 422.507 734.023 422.507 736.193C422.218 736.193 422.078 736.193 421.789 736.193H421.77Z'
          fill='#999999'
        />
        <path
          d='M426.453 736.224C426.453 736.06 426.443 735.968 426.433 735.804C426.423 735.804 426.413 735.804 426.403 735.804C426.333 735.937 426.234 736.04 426.114 736.132C425.995 736.224 425.825 736.265 425.596 736.254C425.237 736.254 424.958 736.132 424.759 735.886C424.56 735.651 424.47 735.303 424.47 734.863C424.48 733.758 424.49 733.205 424.5 732.1C424.5 731.66 424.61 731.312 424.829 731.077C425.048 730.831 425.357 730.719 425.765 730.719C426.174 730.719 426.493 730.852 426.702 731.108C426.911 731.363 427.011 731.711 427.001 732.151V732.458C426.722 732.458 426.582 732.458 426.303 732.448C426.303 732.294 426.303 732.223 426.303 732.069C426.303 731.854 426.264 731.691 426.174 731.578C426.084 731.466 425.945 731.404 425.765 731.394C425.407 731.394 425.217 731.609 425.217 732.039C425.207 733.185 425.198 733.758 425.178 734.904C425.178 735.334 425.347 735.548 425.686 735.559C425.995 735.559 426.184 735.385 426.254 735.016C426.254 734.587 426.264 734.372 426.274 733.942C426.034 733.942 425.915 733.942 425.666 733.942C425.666 733.676 425.666 733.553 425.666 733.287C426.184 733.287 426.443 733.297 426.961 733.307C426.941 734.474 426.931 735.047 426.901 736.214C426.712 736.214 426.622 736.214 426.433 736.214L426.453 736.224Z'
          fill='#999999'
        />
        <path
          d='M428.883 736.285C428.943 734.116 428.973 733.021 429.033 730.852C429.322 730.852 429.471 730.862 429.77 730.872C429.7 733.041 429.67 734.136 429.601 736.305C429.312 736.305 429.172 736.295 428.883 736.285Z'
          fill='#999999'
        />
        <path
          d='M433.427 736.459C433.018 734.75 432.809 733.901 432.391 732.202C432.381 732.202 432.371 732.202 432.361 732.202C432.361 732.612 432.361 732.99 432.341 733.348C432.291 734.576 432.261 735.18 432.211 736.408C431.962 736.398 431.833 736.387 431.583 736.377C431.663 734.208 431.713 733.123 431.793 730.944C432.181 730.964 432.371 730.964 432.759 730.985C433.148 732.561 433.337 733.359 433.706 734.935C433.716 734.935 433.726 734.935 433.736 734.935C433.736 734.423 433.755 733.983 433.775 733.614C433.825 732.581 433.845 732.069 433.895 731.036C434.154 731.046 434.283 731.056 434.543 731.067C434.433 733.236 434.383 734.321 434.274 736.49C433.935 736.469 433.775 736.459 433.437 736.449L433.427 736.459Z'
          fill='#999999'
        />
        <path
          d='M438.219 736.745C438.169 736.234 438.149 735.968 438.099 735.456C437.711 735.425 437.511 735.415 437.123 735.395C437.013 735.896 436.963 736.152 436.854 736.653C436.575 736.633 436.435 736.622 436.156 736.612C436.644 734.463 436.884 733.389 437.382 731.24C437.78 731.261 437.97 731.281 438.368 731.302C438.597 733.491 438.707 734.596 438.916 736.786C438.637 736.766 438.498 736.756 438.219 736.735V736.745ZM437.252 734.77C437.571 734.791 437.72 734.801 438.039 734.822C437.95 733.86 437.9 733.379 437.81 732.417C437.8 732.417 437.79 732.417 437.78 732.417C437.571 733.358 437.461 733.829 437.252 734.77Z'
          fill='#999999'
        />
        <path
          d='M440.809 736.94C440.979 734.771 441.058 733.686 441.228 731.517C441.517 731.538 441.666 731.548 441.955 731.579C441.806 733.482 441.726 734.423 441.576 736.326C442.104 736.367 442.363 736.388 442.882 736.439C442.862 736.705 442.852 736.838 442.822 737.104C442.015 737.032 441.606 737.002 440.799 736.93L440.809 736.94Z'
          fill='#999999'
        />
        <path
          d='M417.316 740.981C417.316 740.859 417.316 740.797 417.316 740.675C417.316 740.47 417.266 740.316 417.167 740.204C417.077 740.091 416.928 740.03 416.719 740.04C416.519 740.04 416.38 740.101 416.29 740.214C416.2 740.327 416.161 740.46 416.161 740.623C416.161 740.705 416.161 740.746 416.161 740.838C416.161 740.961 416.19 741.063 416.23 741.135C416.28 741.217 416.36 741.309 416.489 741.401C416.579 741.473 416.689 741.544 416.798 741.606C416.908 741.677 417.017 741.749 417.127 741.81C417.237 741.882 417.346 741.943 417.446 742.015C417.545 742.087 417.645 742.148 417.715 742.209C417.844 742.312 417.944 742.445 418.014 742.588C418.084 742.731 418.123 742.936 418.123 743.181C418.123 743.314 418.123 743.386 418.123 743.519C418.123 743.949 418.034 744.276 417.834 744.501C417.635 744.737 417.296 744.849 416.828 744.87C416.36 744.88 416.021 744.778 415.812 744.553C415.603 744.328 415.493 743.99 415.473 743.54C415.473 743.417 415.473 743.355 415.463 743.233C415.732 743.233 415.872 743.222 416.151 743.212C416.151 743.335 416.151 743.407 416.151 743.529C416.151 743.755 416.21 743.918 416.31 744.031C416.41 744.143 416.569 744.194 416.788 744.184C416.978 744.184 417.117 744.123 417.217 744.031C417.316 743.928 417.366 743.775 417.356 743.55C417.356 743.447 417.356 743.407 417.356 743.304C417.356 743.222 417.356 743.151 417.336 743.089C417.326 743.028 417.306 742.967 417.277 742.915C417.247 742.864 417.207 742.813 417.167 742.772C417.117 742.731 417.067 742.68 416.998 742.629C416.808 742.475 416.609 742.342 416.41 742.23C416.21 742.117 416.021 741.984 415.852 741.821C415.712 741.688 415.603 741.544 415.533 741.391C415.453 741.237 415.413 741.053 415.413 740.838C415.413 740.746 415.413 740.695 415.413 740.603C415.403 740.245 415.493 739.948 415.692 739.713C415.892 739.477 416.22 739.354 416.669 739.344C416.918 739.344 417.117 739.365 417.286 739.436C417.456 739.508 417.585 739.6 417.685 739.723C417.785 739.846 417.854 739.999 417.904 740.173C417.944 740.347 417.974 740.531 417.974 740.736C417.974 740.828 417.974 740.879 417.974 740.971C417.705 740.971 417.565 740.971 417.286 740.981H417.316Z'
          fill='#999999'
        />
        <path
          d='M422.607 743.448C422.607 743.908 422.497 744.246 422.278 744.471C422.059 744.696 421.76 744.809 421.352 744.809C420.933 744.809 420.624 744.696 420.405 744.461C420.186 744.225 420.076 743.888 420.076 743.448C420.066 742.343 420.056 741.79 420.046 740.685C420.046 740.245 420.156 739.897 420.375 739.652C420.604 739.406 420.913 739.283 421.332 739.273C421.74 739.273 422.059 739.396 422.278 739.652C422.497 739.907 422.607 740.245 422.607 740.695C422.607 741.8 422.607 742.353 422.607 743.458V743.448ZM421.9 740.624C421.9 740.409 421.85 740.245 421.75 740.132C421.65 740.02 421.511 739.958 421.322 739.958C421.142 739.958 421.013 740.02 420.913 740.132C420.814 740.245 420.764 740.409 420.774 740.624C420.774 741.77 420.774 742.343 420.794 743.489C420.794 743.918 420.983 744.133 421.352 744.133C421.531 744.133 421.66 744.082 421.76 743.98C421.86 743.878 421.9 743.714 421.9 743.499C421.9 742.353 421.9 741.78 421.9 740.634V740.624Z'
          fill='#999999'
        />
        <path
          d='M426.373 742.588C426.652 742.588 426.781 742.588 427.06 742.609C427.06 742.967 427.05 743.151 427.04 743.519C427.03 743.98 426.911 744.317 426.702 744.532C426.492 744.747 426.184 744.86 425.785 744.849C425.367 744.849 425.058 744.716 424.858 744.481C424.659 744.236 424.56 743.898 424.56 743.458C424.57 742.343 424.579 741.78 424.599 740.654C424.599 740.194 424.719 739.856 424.928 739.631C425.147 739.406 425.456 739.303 425.865 739.314C426.283 739.314 426.592 739.447 426.811 739.672C427.02 739.897 427.12 740.245 427.11 740.695C427.11 740.951 427.1 741.084 427.09 741.34C426.811 741.34 426.672 741.33 426.403 741.319C426.403 741.064 426.403 740.93 426.413 740.675C426.413 740.46 426.373 740.296 426.283 740.184C426.194 740.071 426.054 740.01 425.875 739.999C425.506 739.999 425.327 740.204 425.317 740.644C425.297 741.79 425.287 742.363 425.267 743.519C425.267 743.724 425.307 743.888 425.386 744C425.466 744.113 425.606 744.164 425.795 744.174C426.154 744.174 426.343 743.969 426.353 743.55C426.353 743.171 426.363 742.977 426.373 742.598V742.588Z'
          fill='#999999'
        />
        <path
          d='M430.836 742.742C431.115 742.752 431.245 742.762 431.524 742.772C431.504 743.131 431.494 743.315 431.484 743.683C431.464 744.144 431.345 744.481 431.125 744.686C430.906 744.901 430.597 744.993 430.199 744.983C429.78 744.962 429.481 744.829 429.282 744.584C429.083 744.338 428.993 743.99 429.003 743.55C429.043 742.435 429.063 741.872 429.103 740.757C429.123 740.296 429.232 739.959 429.462 739.744C429.681 739.529 430 739.426 430.408 739.447C430.826 739.467 431.135 739.59 431.345 739.825C431.554 740.061 431.643 740.409 431.624 740.859C431.614 741.115 431.604 741.248 431.594 741.504C431.315 741.493 431.175 741.483 430.906 741.473C430.916 741.217 430.926 741.084 430.936 740.828C430.936 740.613 430.906 740.45 430.816 740.327C430.727 740.204 430.597 740.143 430.408 740.133C430.039 740.112 429.85 740.327 429.84 740.767C429.79 741.913 429.77 742.486 429.731 743.642C429.731 743.847 429.76 744.011 429.84 744.123C429.92 744.236 430.059 744.297 430.239 744.307C430.597 744.328 430.797 744.123 430.807 743.693C430.826 743.315 430.836 743.12 430.846 742.742H430.836Z'
          fill='#999999'
        />
        <path
          d='M433.367 745.105C433.496 742.936 433.556 741.851 433.686 739.682C434.473 739.733 434.861 739.754 435.648 739.815C435.628 740.081 435.618 740.214 435.608 740.48C435.11 740.449 434.861 740.429 434.373 740.398C434.333 741.033 434.313 741.35 434.273 741.984C434.722 742.015 434.951 742.025 435.399 742.056C435.379 742.322 435.369 742.455 435.349 742.721C434.901 742.69 434.682 742.67 434.233 742.649C434.184 743.386 434.164 743.755 434.124 744.491C434.632 744.522 434.891 744.542 435.399 744.583C435.379 744.849 435.369 744.982 435.349 745.249C434.562 745.187 434.164 745.167 433.377 745.115L433.367 745.105Z'
          fill='#999999'
        />
        <path
          d='M437.243 745.382C437.412 743.212 437.492 742.128 437.661 739.969C438.269 740.02 438.568 740.04 439.176 740.102C439.554 740.132 439.813 740.255 439.953 740.46C440.092 740.665 440.142 740.941 440.112 741.279C440.082 741.575 440.072 741.729 440.042 742.025C440.022 742.271 439.953 742.466 439.843 742.609C439.733 742.742 439.594 742.834 439.415 742.854C439.415 742.865 439.415 742.875 439.415 742.885C439.604 742.936 439.733 743.038 439.813 743.182C439.893 743.325 439.923 743.54 439.903 743.806C439.833 744.522 439.803 744.891 439.743 745.607C439.464 745.576 439.325 745.566 439.046 745.546C439.106 744.799 439.146 744.43 439.205 743.683C439.225 743.509 439.205 743.376 439.146 743.294C439.086 743.212 438.976 743.161 438.797 743.141C438.538 743.12 438.408 743.11 438.149 743.079C438.07 744.021 438.03 744.492 437.96 745.433C437.681 745.412 437.542 745.402 437.263 745.372L437.243 745.382ZM439.395 741.289C439.405 741.125 439.385 740.992 439.315 740.9C439.245 740.808 439.126 740.757 438.956 740.736C438.707 740.716 438.578 740.706 438.329 740.685C438.269 741.401 438.239 741.76 438.179 742.476C438.428 742.496 438.558 742.506 438.807 742.527C438.956 742.537 439.066 742.506 439.156 742.435C439.245 742.363 439.305 742.22 439.315 742.015C439.345 741.729 439.355 741.575 439.375 741.289H439.395Z'
          fill='#999999'
        />
      </g>
      <path
        d='M90.2362 117.53L89.8377 67.5955L84.5174 69.8875L81.5782 71.4428L79.6554 72.6912L77.872 74.1647L76.6963 75.4949L75.7797 77.0912L75.3812 78.36L75.2417 79.6902L75.8195 81.8799L76.7561 84.2539L79.0675 89.9022L84.3081 102.938L90.2362 117.53Z'
        fill='black'
      />
      <path
        d='M202.571 24.5676L146.927 45.7897L146.767 788.767L150.115 788.818H153.612L156.142 788.634L159.54 788.429L163.904 788.112L174.783 787.181L182.057 786.587L186.64 786.27L191.153 786.004L195.049 785.83L199.711 785.687L201.714 785.656L204.723 785.636L207.283 785.646L210.452 785.697L214.098 785.82L216.429 785.922V74.9726L216.31 74.8805L216.19 74.7475L216.031 74.4405L215.872 74.021L215.692 73.5401L215.274 72.4452L214.925 71.4936L213.012 66.1011L210.481 58.611L207.433 48.2046L204.902 37.481L203.079 27.5965L202.571 24.5676Z'
        fill='black'
      />
      <path
        d='M308.25 78.6872L295.985 75.7914L273.349 69.2427L273.249 789.156V789.391L281.369 789.831L290.256 790.292L292.598 790.404L303.726 790.906L308.519 791.069L311.767 790.947L315.642 790.783L321.152 790.527L331.464 790.026L340.221 789.565L343.071 789.402L343.051 69.2836L341.885 69.652L326.811 74.1338L323.433 75.0342L308.25 78.6872Z'
        fill='black'
      />
      <path
        d='M526.343 117.335L532.082 102.611L540.83 81.6038L541.258 79.6903V79.5368L541.238 79.1787L541.178 78.667L541.119 78.3191L541.049 78.0122L540.969 77.7257L540.74 77.1117L540.491 76.5899L540.152 75.9964L539.833 75.5359L539.524 75.1266L539.246 74.7992L538.797 74.3285L538.229 73.7964L537.562 73.2336L536.844 72.6811L536.247 72.2718L535.539 71.8113L534.643 71.2792L533.736 70.7778L532.909 70.3481L532.012 69.8979L531.205 69.5192L530.249 69.0793L529.103 68.5881L527.967 68.1174L527.26 67.8309L526.782 67.6365L526.343 117.335Z'
        fill='black'
      />
      <path
        d='M469.992 45.9534L446.668 37.041L426.214 29.2439L420.774 27.1769L416.848 25.683L413.929 24.5676L413.52 27.0439L412.753 31.5973L411.976 35.721L410.073 44.173L408.18 51.438L406.267 57.8537L403.099 67.3494L400.738 73.7345L400.469 74.4405L400.05 75.208V86.3101L400.1 785.799V785.922L401.903 785.84L403.169 785.789L411.747 785.636L420.634 785.799L428.734 786.199L437.273 786.812L446.867 787.621L456.691 788.419L464.522 788.787H466.315L469.772 788.767L469.992 45.9534Z'
        fill='black'
      />
      <path
        d='M887.378 116.701L879.846 97.4741L875.761 88.1831L873.23 82.0027L872.692 79.6697L872.403 77.0706L872.463 74.3079L872.911 71.494L873.748 68.8131L874.894 66.4085L876.588 63.9527L877.465 62.9704L879.158 61.9062L880.952 60.8011L884.847 58.4885L887.079 57.2197L887.378 116.701Z'
        fill='black'
      />
      <path
        d='M883.492 118.932L885.166 111.063L877.465 62.9705L871.656 66.8588L865.649 71.3713L857.509 79.4754L848.084 92.8901L843.969 101.884L840.99 110.746L836.257 131.456L832.103 158.408L828.655 186.21L826.025 206.562L824.072 216.723L819.111 236.39L813.113 256.445L807.513 274.935L805.66 281.331L805.381 282.026L804.823 282.876L803.967 283.971L803.488 284.687L803.13 285.495L802.97 286.263L802.94 286.938L803.03 287.695L831.266 313.655L841.817 315.63L883.492 118.932Z'
        fill='black'
      />
      <path
        d='M924.57 300.823L922.877 304.855L921.691 307.556L920.117 311.23L918.911 314.217L918.363 315.63L918.114 316.673L917.905 318.014L917.487 320.162L917.118 321.349L916.63 322.352L915.972 323.14L912.296 323.723L898.009 323.14L895.727 322.086L916.301 228.552L918.194 239.879L920.326 255.074L922.249 272.346L923.564 285.771L924.57 300.823Z'
        fill='black'
      />
      <path
        d='M1013.56 10.0278L1010.09 6.26229L998.238 1.63721L997.122 1.99535L988.394 7.41856L969.564 17.6407L943.789 30.3187L944.078 788.767L949.408 788.798L954.47 788.593L960.497 788.184L963.536 787.928L978.421 786.67L981.818 786.424L985.316 786.189L994.033 785.779L998.796 785.657L1005.23 785.646L1007.97 785.697L1011.77 785.831L1013.85 785.923L1013.56 10.0278Z'
        fill='black'
      />
      <path
        d='M1140.37 43.7436L1100.52 30.1958L1070.79 43.7436L1070.43 789.064V789.412L1072.28 789.514L1073.97 789.606L1080.95 789.975L1085.67 790.21L1087.38 790.292L1088.87 790.363L1092.33 790.527L1094.55 790.629L1100.31 790.875L1105.26 791.08L1105.72 791.09L1106.63 791.059L1110.97 790.885L1112.66 790.814L1117.17 790.619L1121.94 790.394L1127.02 790.149L1132.07 789.893L1138.31 789.555L1140.37 789.443V43.7436Z'
        fill='black'
      />
      <path
        d='M1214.28 1.99531L1200.15 0L1197.58 10.171L1197.42 785.933L1198.35 785.882L1199.82 785.82L1203.14 785.708L1207.87 785.636L1212.64 785.657L1217.6 785.779L1222.58 785.994L1227.57 786.281L1232.52 786.639L1238.81 787.15L1242.7 787.488L1246.62 787.826L1250.5 788.143L1254.19 788.419L1256.14 788.552L1258.95 788.696L1263.16 788.818H1265.65L1266.46 788.798L1267.05 788.778L1267.3 30.1652L1261.17 26.8908L1228.87 9.66963L1214.28 1.99531Z'
        fill='black'
      />
      <path
        d='M1295.1 228.552L1314.54 320.244L1305.85 325.985L1295.43 323.14L1294.68 322.209L1294.24 321.227L1293.69 319.098L1293.4 317.328L1293.16 316.008L1292.62 314.535L1291.44 311.598L1289.51 307.085L1286.99 301.212L1288.07 286.723L1288.95 276.808L1289.9 267.414L1290.94 258.246L1291.98 249.896L1293.14 241.475L1294.45 232.337L1295.1 228.552Z'
        fill='black'
      />
      <path
        d='M1326.21 110.96L1323.71 117.56V108.32L1324.25 57.1787L1326.31 58.3452L1330.26 60.6782L1333.8 62.8884L1336.93 64.9042L1338.89 66.2549L1340.1 67.1144L1341.02 67.7693L1342.34 68.7414L1344.03 70.0306L1346.45 71.9441L1348.11 73.4688L1349.12 74.4511L1350.18 75.5152L1355.48 81.3273L1358.17 84.7654L1359.71 86.9449L1362.37 91.1913L1364.32 94.8238L1367.27 101.444L1368.82 105.691L1370.55 111.206L1371.86 116.066L1373.56 123.393L1374.85 129.88L1376.07 136.705L1378.22 150.601L1379.85 162.522L1381.28 173.921L1383.36 191.418L1385.49 207.207L1386.17 210.972L1387.13 215.761L1388.69 222.699L1390.23 228.807L1391.35 233.023L1394.04 242.437L1398.23 256.251L1403.54 273.728L1404.76 277.923L1405.34 279.929L1405.74 281.33L1406.09 282.149L1406.68 282.998L1407.36 283.868L1408.03 284.912L1408.37 285.874L1408.47 287.194L1408.05 287.9L1405.32 292.034L1369.88 316.571L1367.86 306.891L1363.67 287.695L1326.21 110.96Z'
        fill='black'
      />
      <path d='M1070.43 30.1958H1140.37V43.7436H1070.79L1070.43 30.1958Z' fill='black' />
      <path d='M1197.42 0H1200.15L1197.58 10.171' fill='black' />
      <path d='M1013.56 10.0278L1013.85 0L998.237 1.63716' fill='black' />
    </svg>
  )
}

export default ShirtModelThree
