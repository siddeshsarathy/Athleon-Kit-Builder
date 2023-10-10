import { Colors, NumberModels } from '@/models'
import clsx from 'clsx'

interface Props {
  className: string
  numberModel?: NumberModels
  numberBaseColor?: Colors
}

function NumberModelSix({ className, numberModel, numberBaseColor }: Props) {
  const classes = clsx(
    'opacity-0',
    numberModel === 'six' && 'opacity-100',
    numberBaseColor === 'yellow' && 'fill-yellow-500 stroke-yellow-500',
    numberBaseColor === 'red' && 'fill-red-500 stroke-red-500',
    numberBaseColor === 'blue' && 'fill-blue-500 stroke-blue-500',
    numberBaseColor === 'green' && 'fill-green-500 stroke-green-500',
    numberBaseColor === 'orange' && 'fill-orange-500 stroke-orange-500',
    numberBaseColor === 'violet' && 'fill-violet-500 stroke-violet-500',
    numberBaseColor === 'gray' && 'fill-gray-500 stroke-gray-500',
    numberBaseColor === 'black' && 'fill-black stroke-black',
    numberBaseColor === 'white' && 'fill-white stroke-white',
    numberBaseColor === 'cyan' && 'fill-cyan-500 stroke-cyan-500',
    numberBaseColor === 'pink' && 'fill-pink-500 stroke-pink-500',
    numberBaseColor === 'lime' && 'fill-lime-500 stroke-lime-500',
    className
  )

  return (
    <svg className={classes} viewBox='0 0 1414 792' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1016 133V154.266H1031.69V323H1066.55V133H1016Z' />
      <path d='M1123.03 299.642V155.661V133H1104.2C1095.61 134.267 1092.46 137.299 1088.86 145.55V309.752C1092.29 318.364 1095.54 321.214 1104.2 321.954H1172.88C1181.85 321.073 1184.9 318.221 1187.52 309.752V145.55C1184.89 137.774 1181.84 134.895 1172.88 133H1144.64V155.661H1153.36V299.642H1123.03Z' />
      <path d='M1144.64 133V155.661H1123.03V133H1144.64Z' />
      <path d='M263 126V136.073H270.431V216H286.945V126H263Z' />
      <path d='M313.697 204.936V136.734V126H304.78C300.711 126.6 299.216 128.036 297.514 131.945V209.725C299.139 213.804 300.675 215.154 304.78 215.505H337.312C341.563 215.087 343.006 213.736 344.248 209.725V131.945C343.001 128.261 341.556 126.898 337.312 126H323.936V136.734H328.064V204.936H313.697Z' />
      <path d='M323.936 126V136.734H313.697V126H323.936Z' />
      <path d='M1008.12 88.6621L1022.62 110.6V88.459C1022.62 87.0202 1022.92 85.9453 1023.53 85.2344C1024.16 84.5065 1024.99 84.1426 1026.04 84.1426C1027.13 84.1426 1027.98 84.5065 1028.61 85.2344C1029.23 85.9453 1029.55 87.0202 1029.55 88.459V117.734C1029.55 121.001 1028.19 122.635 1025.48 122.635C1024.81 122.635 1024.2 122.533 1023.66 122.33C1023.11 122.144 1022.61 121.839 1022.13 121.416C1021.66 120.993 1021.22 120.502 1020.81 119.943C1020.41 119.368 1020 118.784 1019.59 118.191L1005.45 96.5078V118.318C1005.45 119.74 1005.12 120.815 1004.46 121.543C1003.8 122.271 1002.95 122.635 1001.92 122.635C1000.86 122.635 1000 122.271 999.357 121.543C998.714 120.798 998.393 119.723 998.393 118.318V89.6016C998.393 88.3828 998.528 87.4264 998.799 86.7324C999.12 85.9707 999.654 85.3529 1000.4 84.8789C1001.14 84.388 1001.95 84.1426 1002.81 84.1426C1003.49 84.1426 1004.06 84.2526 1004.54 84.4727C1005.03 84.6927 1005.45 84.9889 1005.81 85.3613C1006.18 85.7337 1006.55 86.2161 1006.92 86.8086C1007.31 87.401 1007.71 88.0189 1008.12 88.6621ZM1050.18 84.1426C1054.04 84.1426 1057.34 84.9297 1060.1 86.5039C1062.88 88.0612 1064.98 90.2871 1066.4 93.1816C1067.82 96.0592 1068.53 99.4447 1068.53 103.338C1068.53 106.215 1068.14 108.831 1067.37 111.184C1066.59 113.536 1065.42 115.576 1063.86 117.303C1062.3 119.029 1060.39 120.35 1058.12 121.264C1055.85 122.178 1053.26 122.635 1050.33 122.635C1047.42 122.635 1044.81 122.169 1042.51 121.238C1040.21 120.29 1038.28 118.962 1036.74 117.252C1035.2 115.542 1034.04 113.486 1033.24 111.082C1032.46 108.678 1032.07 106.08 1032.07 103.287C1032.07 100.426 1032.48 97.8027 1033.29 95.416C1034.12 93.0293 1035.31 90.998 1036.87 89.3223C1038.43 87.6465 1040.32 86.3685 1042.56 85.4883C1044.79 84.5911 1047.33 84.1426 1050.18 84.1426ZM1060.89 103.287C1060.89 100.562 1060.45 98.2005 1059.57 96.2031C1058.69 94.2057 1057.43 92.6992 1055.79 91.6836C1054.16 90.651 1052.29 90.1348 1050.18 90.1348C1048.67 90.1348 1047.27 90.4225 1045.99 90.998C1044.72 91.5566 1043.62 92.3776 1042.69 93.4609C1041.77 94.5443 1041.04 95.9323 1040.5 97.625C1039.98 99.3008 1039.71 101.188 1039.71 103.287C1039.71 105.403 1039.98 107.316 1040.5 109.025C1041.04 110.735 1041.8 112.157 1042.76 113.291C1043.74 114.408 1044.86 115.246 1046.11 115.805C1047.38 116.363 1048.77 116.643 1050.28 116.643C1052.21 116.643 1053.98 116.16 1055.58 115.195C1057.21 114.23 1058.5 112.741 1059.44 110.727C1060.41 108.712 1060.89 106.232 1060.89 103.287ZM1083.55 116.389L1077.58 92.6738V118.369C1077.58 119.791 1077.26 120.857 1076.62 121.568C1075.99 122.279 1075.15 122.635 1074.11 122.635C1073.09 122.635 1072.26 122.288 1071.62 121.594C1070.97 120.883 1070.65 119.808 1070.65 118.369V88.916C1070.65 87.291 1071.08 86.1992 1071.92 85.6406C1072.77 85.0651 1073.91 84.7773 1075.35 84.7773H1077.69C1079.09 84.7773 1080.11 84.9043 1080.73 85.1582C1081.38 85.4121 1081.85 85.8691 1082.15 86.5293C1082.46 87.1895 1082.81 88.2643 1083.2 89.7539L1088.6 110.143L1094.01 89.7539C1094.4 88.2643 1094.75 87.1895 1095.05 86.5293C1095.36 85.8691 1095.82 85.4121 1096.45 85.1582C1097.09 84.9043 1098.12 84.7773 1099.52 84.7773H1101.86C1103.3 84.7773 1104.44 85.0651 1105.29 85.6406C1106.13 86.1992 1106.55 87.291 1106.55 88.916V118.369C1106.55 119.791 1106.23 120.857 1105.59 121.568C1104.96 122.279 1104.12 122.635 1103.05 122.635C1102.05 122.635 1101.23 122.279 1100.59 121.568C1099.94 120.857 1099.62 119.791 1099.62 118.369V92.6738L1093.66 116.389C1093.27 117.929 1092.95 119.063 1092.69 119.791C1092.45 120.502 1092.01 121.154 1091.35 121.746C1090.69 122.339 1089.77 122.635 1088.6 122.635C1087.72 122.635 1086.98 122.44 1086.37 122.051C1085.76 121.678 1085.29 121.196 1084.95 120.604C1084.61 120.011 1084.34 119.359 1084.13 118.648C1083.95 117.921 1083.75 117.167 1083.55 116.389ZM1126.19 122H1114.82C1113.18 122 1112 121.636 1111.29 120.908C1110.6 120.163 1110.25 118.987 1110.25 117.379V89.3984C1110.25 87.7565 1110.6 86.5801 1111.31 85.8691C1112.04 85.1413 1113.21 84.7773 1114.82 84.7773H1126.88C1128.66 84.7773 1130.2 84.8874 1131.5 85.1074C1132.8 85.3275 1133.97 85.7507 1135 86.377C1135.88 86.9017 1136.66 87.5703 1137.34 88.3828C1138.02 89.1784 1138.53 90.0671 1138.89 91.0488C1139.24 92.0137 1139.42 93.0378 1139.42 94.1211C1139.42 97.8451 1137.56 100.57 1133.84 102.297C1138.73 103.854 1141.17 106.884 1141.17 111.387C1141.17 113.469 1140.64 115.348 1139.57 117.023C1138.51 118.682 1137.07 119.91 1135.26 120.705C1134.12 121.179 1132.82 121.518 1131.35 121.721C1129.88 121.907 1128.16 122 1126.19 122ZM1125.63 105.471H1117.79V116.338H1125.89C1130.98 116.338 1133.53 114.501 1133.53 110.828C1133.53 108.949 1132.87 107.587 1131.55 106.74C1130.23 105.894 1128.26 105.471 1125.63 105.471ZM1117.79 90.4395V100.062H1124.7C1126.57 100.062 1128.02 99.8848 1129.04 99.5293C1130.07 99.1738 1130.86 98.4967 1131.4 97.498C1131.82 96.7871 1132.03 95.9915 1132.03 95.1113C1132.03 93.2324 1131.36 91.9883 1130.03 91.3789C1128.69 90.7526 1126.65 90.4395 1123.91 90.4395H1117.79ZM1153.86 106.08H1151.21V118.039C1151.21 119.613 1150.87 120.773 1150.17 121.518C1149.48 122.262 1148.57 122.635 1147.46 122.635C1146.26 122.635 1145.32 122.245 1144.66 121.467C1144 120.688 1143.67 119.546 1143.67 118.039V89.3984C1143.67 87.7734 1144.04 86.597 1144.77 85.8691C1145.49 85.1413 1146.67 84.7773 1148.29 84.7773H1160.56C1162.25 84.7773 1163.7 84.8535 1164.9 85.0059C1166.1 85.1413 1167.19 85.429 1168.15 85.8691C1169.32 86.36 1170.35 87.0625 1171.25 87.9766C1172.15 88.8906 1172.82 89.957 1173.28 91.1758C1173.75 92.3776 1173.99 93.6556 1173.99 95.0098C1173.99 97.7858 1173.2 100.003 1171.63 101.662C1170.07 103.321 1167.7 104.497 1164.52 105.191C1165.86 105.902 1167.13 106.952 1168.35 108.34C1169.57 109.728 1170.66 111.209 1171.6 112.783C1172.57 114.34 1173.31 115.754 1173.84 117.023C1174.38 118.276 1174.65 119.139 1174.65 119.613C1174.65 120.104 1174.49 120.595 1174.17 121.086C1173.86 121.56 1173.44 121.932 1172.9 122.203C1172.36 122.491 1171.73 122.635 1171.02 122.635C1170.17 122.635 1169.46 122.432 1168.89 122.025C1168.31 121.636 1167.81 121.137 1167.39 120.527C1166.98 119.918 1166.42 119.021 1165.71 117.836L1162.69 112.809C1161.61 110.964 1160.63 109.559 1159.77 108.594C1158.93 107.629 1158.06 106.969 1157.18 106.613C1156.3 106.258 1155.19 106.08 1153.86 106.08ZM1158.17 90.4395H1151.21V100.672H1157.97C1159.78 100.672 1161.3 100.52 1162.54 100.215C1163.77 99.8932 1164.71 99.36 1165.36 98.6152C1166.02 97.8535 1166.35 96.8125 1166.35 95.4922C1166.35 94.4596 1166.09 93.554 1165.56 92.7754C1165.04 91.9798 1164.31 91.3874 1163.38 90.998C1162.5 90.6257 1160.76 90.4395 1158.17 90.4395ZM1201.68 90.5918H1184.69V99.7324H1200.33C1201.48 99.7324 1202.34 99.9948 1202.9 100.52C1203.47 101.027 1203.76 101.704 1203.76 102.551C1203.76 103.397 1203.48 104.091 1202.92 104.633C1202.36 105.158 1201.5 105.42 1200.33 105.42H1184.69V116.008H1202.26C1203.45 116.008 1204.34 116.287 1204.93 116.846C1205.54 117.387 1205.84 118.115 1205.84 119.029C1205.84 119.91 1205.54 120.629 1204.93 121.188C1204.34 121.729 1203.45 122 1202.26 122H1181.77C1180.13 122 1178.94 121.636 1178.22 120.908C1177.51 120.18 1177.15 119.004 1177.15 117.379V89.3984C1177.15 88.3151 1177.31 87.4349 1177.63 86.7578C1177.95 86.0638 1178.45 85.5645 1179.13 85.2598C1179.82 84.9382 1180.71 84.7773 1181.77 84.7773H1201.68C1202.88 84.7773 1203.77 85.0482 1204.34 85.5898C1204.94 86.1146 1205.23 86.8086 1205.23 87.6719C1205.23 88.5521 1204.94 89.263 1204.34 89.8047C1203.77 90.3294 1202.88 90.5918 1201.68 90.5918Z' />
      <g clipPath='url(#clip0_47_954)'>
        <path d='M397.987 209.855C410.617 209.855 420.855 199.617 420.855 186.987C420.855 174.357 410.617 164.118 397.987 164.118C385.357 164.118 375.118 174.357 375.118 186.987C375.118 199.617 385.357 209.855 397.987 209.855ZM397.987 165.292C409.949 165.292 419.681 175.024 419.681 186.987C419.681 198.949 409.949 208.681 397.987 208.681C386.024 208.681 376.292 198.949 376.292 186.987C376.292 175.024 386.024 165.292 397.987 165.292Z' />
        <path d='M397.986 207.976C409.578 207.976 418.976 198.579 418.976 186.986C418.976 175.394 409.578 165.997 397.986 165.997C386.393 165.997 376.996 175.394 376.996 186.986C376.996 198.579 386.393 207.976 397.986 207.976ZM397.986 166.466C409.301 166.466 418.506 175.671 418.506 186.986C418.506 198.301 409.301 207.506 397.986 207.506C386.671 207.506 377.466 198.301 377.466 186.986C377.466 175.671 386.671 166.466 397.986 166.466Z' />
        <path d='M397.986 210.973C411.212 210.973 421.972 200.213 421.972 186.986C421.972 173.76 411.212 163 397.986 163C384.76 163 374 173.76 374 186.986C374 200.213 384.76 210.973 397.986 210.973ZM397.986 163.47C410.953 163.47 421.503 174.019 421.503 186.986C421.503 199.954 410.953 210.503 397.986 210.503C385.019 210.503 374.47 199.953 374.47 186.986C374.47 174.019 385.019 163.47 397.986 163.47Z' />
        <path d='M411.423 182.963C411.415 182.993 411.403 183.022 411.401 183.052C411.369 183.451 411.163 183.74 410.83 183.945C410.616 184.077 410.38 184.156 410.135 184.202C409.104 184.394 408.073 184.417 407.049 184.157C406.831 184.101 406.621 184.017 406.409 183.938C406.27 183.886 406.207 183.769 406.198 183.628C406.187 183.465 406.188 183.3 406.185 183.136C406.17 182.303 406.156 181.469 406.141 180.636C406.14 180.588 406.137 180.54 406.115 180.486C406.098 180.514 406.078 180.541 406.063 180.571C405.935 180.842 405.863 181.13 405.837 181.427C405.817 181.661 405.807 181.897 405.808 182.131C405.824 186.477 405.843 190.823 405.86 195.169C405.868 197.205 405.871 199.241 405.88 201.277C405.881 201.466 405.821 201.606 405.67 201.721C405.344 201.971 404.99 202.17 404.617 202.338C403.915 202.656 403.181 202.869 402.429 203.03C401.614 203.205 400.788 203.313 399.957 203.381C398.81 203.475 397.662 203.492 396.514 203.449C395.494 203.41 394.48 203.312 393.478 203.108C392.729 202.955 391.997 202.749 391.304 202.421C390.958 202.257 390.628 202.068 390.336 201.818C390.239 201.735 390.151 201.64 390.061 201.548C389.98 201.465 389.945 201.362 389.95 201.245C389.951 201.206 389.95 201.166 389.95 201.126C389.95 194.797 389.95 188.469 389.951 182.14C389.951 181.718 389.936 181.298 389.839 180.885C389.805 180.743 389.755 180.606 389.709 180.467C389.696 180.427 389.673 180.389 389.633 180.353C389.631 180.389 389.626 180.426 389.625 180.462C389.608 181.469 389.591 182.475 389.574 183.482C389.573 183.517 389.571 183.553 389.571 183.588C389.57 183.796 389.474 183.952 389.303 184.065C389.172 184.152 389.026 184.202 388.874 184.239C388.585 184.308 388.289 184.345 387.992 184.345C387.477 184.344 386.962 184.346 386.449 184.315C385.914 184.283 385.401 184.139 384.923 183.892C384.801 183.829 384.688 183.749 384.579 183.666C384.476 183.588 384.398 183.485 384.353 183.36C384.344 183.332 384.321 183.308 384.305 183.283C384.305 183.212 384.305 183.141 384.305 183.07C384.321 182.979 384.344 182.889 384.352 182.798C384.437 181.911 384.509 181.023 384.606 180.137C384.709 179.194 384.846 178.256 385.026 177.324C385.143 176.719 385.281 176.12 385.473 175.533C385.661 174.959 385.983 174.474 386.422 174.064C386.673 173.83 386.944 173.623 387.232 173.439C387.961 172.972 388.75 172.637 389.572 172.374C389.715 172.328 389.863 172.292 390.001 172.234C390.569 171.998 391.134 171.755 391.7 171.514C392.466 171.188 393.233 170.862 393.999 170.536C394.043 170.517 394.092 170.501 394.13 170.473C394.265 170.375 394.412 170.373 394.562 170.419C394.68 170.455 394.797 170.498 394.91 170.548C395.702 170.896 396.527 171.092 397.392 171.132C398.246 171.171 399.086 171.094 399.901 170.837C400.394 170.682 400.876 170.495 401.364 170.322C401.408 170.322 401.452 170.322 401.497 170.322C401.599 170.361 401.714 170.383 401.776 170.485C401.819 170.554 401.882 170.587 401.952 170.616C402.802 170.972 403.652 171.325 404.499 171.686C405.212 171.991 405.916 172.317 406.647 172.575C406.819 172.636 406.987 172.704 407.155 172.773C407.722 173.006 408.276 173.262 408.79 173.598C409.58 174.112 410.115 174.812 410.388 175.717C410.627 176.508 410.791 177.315 410.915 178.13C411.018 178.813 411.113 179.499 411.187 180.186C411.272 180.961 411.33 181.739 411.4 182.516C411.404 182.55 411.415 182.583 411.423 182.617C411.423 182.733 411.423 182.848 411.423 182.963ZM390.079 180.212C390.154 180.391 390.218 180.577 390.265 180.765C390.377 181.215 390.397 181.676 390.397 182.138C390.397 188.445 390.397 194.753 390.397 201.06C390.397 201.099 390.399 201.14 390.396 201.179C390.391 201.237 390.41 201.283 390.452 201.321C390.535 201.394 390.613 201.473 390.7 201.542C391.012 201.788 391.362 201.97 391.727 202.124C392.573 202.482 393.463 202.678 394.368 202.812C395.304 202.951 396.247 203.009 397.192 203.024C398.408 203.043 399.621 202.995 400.83 202.846C401.561 202.756 402.285 202.628 402.996 202.437C403.6 202.275 404.193 202.076 404.746 201.779C404.96 201.664 405.16 201.523 405.366 201.393C405.415 201.363 405.442 201.322 405.434 201.261C405.43 201.226 405.434 201.19 405.434 201.155C405.412 196.027 405.391 190.9 405.37 185.773C405.365 184.508 405.363 183.245 405.361 181.98C405.36 181.602 405.393 181.227 405.49 180.86C405.571 180.549 405.695 180.256 405.895 180.001C405.902 179.991 406.56 179.299 406.576 180.097C406.59 180.837 406.601 181.578 406.613 182.318C406.62 182.695 406.63 183.072 406.633 183.449C406.634 183.527 406.654 183.573 406.732 183.595C406.852 183.629 406.967 183.675 407.087 183.708C407.77 183.9 408.467 183.928 409.171 183.881C409.306 183.872 409.442 183.856 409.59 183.843C409.576 183.604 409.564 183.381 409.552 183.16C409.757 183.11 409.952 183.069 410.144 183.014C410.395 182.943 410.643 182.862 410.893 182.784C410.931 182.772 410.983 182.767 410.967 182.688C410.492 182.819 410.029 182.975 409.542 183.059C409.537 183.031 409.532 183.014 409.532 182.997C409.531 182.98 409.535 182.963 409.537 182.943C409.57 182.934 409.6 182.926 409.629 182.918C410.035 182.809 410.442 182.7 410.848 182.59C410.877 182.582 410.909 182.576 410.935 182.559C410.951 182.55 410.956 182.523 410.98 182.478C410.481 182.62 410.009 182.748 409.517 182.828C409.505 182.712 409.49 182.605 409.513 182.496C409.667 182.464 409.815 182.439 409.961 182.402C410.262 182.327 410.561 182.246 410.861 182.168C410.899 182.157 410.939 182.15 410.923 182.077C410.455 182.206 409.997 182.351 409.51 182.422C409.51 182.378 409.51 182.342 409.51 182.301C409.989 182.212 410.454 182.093 410.919 181.94C410.91 181.843 410.903 181.755 410.894 181.668C410.838 181.103 410.794 180.537 410.721 179.975C410.621 179.197 410.507 178.42 410.383 177.646C410.284 177.034 410.141 176.43 409.961 175.835C409.722 175.046 409.259 174.43 408.568 173.985C408.382 173.865 408.192 173.75 407.996 173.647C407.269 173.263 406.497 172.987 405.727 172.706C405.685 172.691 405.631 172.694 405.585 172.704C404.884 172.854 404.184 173.016 403.481 173.155C402.528 173.344 401.569 173.492 400.604 173.597C400.422 173.617 400.252 173.655 400.088 173.748C399.821 173.898 399.53 173.997 399.234 174.075C398.561 174.25 397.879 174.291 397.189 174.214C396.674 174.156 396.178 174.028 395.719 173.781C395.567 173.7 395.414 173.659 395.243 173.639C394.592 173.563 393.941 173.481 393.292 173.382C392.254 173.225 391.228 173.003 390.217 172.714C390.131 172.69 390.055 172.691 389.971 172.715C389.403 172.879 388.852 173.085 388.319 173.34C387.854 173.562 387.412 173.823 387.006 174.143C386.443 174.586 386.031 175.131 385.844 175.832C385.829 175.888 385.809 175.942 385.793 175.997C385.55 176.833 385.4 177.689 385.267 178.547C385.11 179.555 384.996 180.568 384.896 181.583C384.885 181.692 384.879 181.802 384.87 181.929C385.297 182.059 385.719 182.187 386.148 182.317C386.144 182.348 386.14 182.381 386.135 182.421C385.698 182.333 385.287 182.185 384.871 182.051C384.848 182.112 384.88 182.126 384.915 182.138C385.05 182.182 385.183 182.23 385.319 182.27C385.59 182.349 385.863 182.424 386.137 182.501C386.137 182.608 386.137 182.712 386.137 182.827C385.686 182.734 385.26 182.592 384.823 182.453C384.845 182.533 384.844 182.536 384.915 182.559C385.281 182.677 385.648 182.794 386.015 182.911C386.048 182.921 386.081 182.933 386.119 182.946C386.114 182.984 386.109 183.017 386.104 183.058C385.661 182.954 385.244 182.797 384.821 182.658C384.789 182.746 384.854 182.751 384.895 182.764C385.256 182.885 385.618 183.003 385.979 183.121C386.016 183.133 386.053 183.145 386.095 183.158C386.083 183.379 386.071 183.594 386.06 183.806C386.103 183.818 386.128 183.828 386.154 183.832C386.224 183.844 386.294 183.858 386.364 183.864C387.059 183.914 387.755 183.943 388.45 183.865C388.639 183.843 388.827 183.808 389.002 183.728C389.087 183.689 389.13 183.634 389.129 183.533C389.128 183.307 389.143 183.081 389.146 182.855C389.162 181.768 389.176 180.994 389.192 179.907C389.184 179.804 389.573 179.364 390.079 180.212ZM401.387 170.772C401.221 170.836 401.071 170.89 400.924 170.951C399.986 171.342 399.012 171.565 397.993 171.581C397.361 171.591 396.735 171.546 396.116 171.413C395.612 171.305 395.129 171.13 394.656 170.929C394.601 170.905 394.543 170.887 394.467 170.859C394.479 170.995 394.485 171.109 394.498 171.223C394.555 171.75 394.731 172.232 395.057 172.653C395.452 173.164 395.978 173.477 396.592 173.647C397.328 173.851 398.072 173.858 398.819 173.714C399.351 173.612 399.849 173.419 400.29 173.098C400.905 172.651 401.284 172.059 401.38 171.299C401.4 171.132 401.42 170.964 401.387 170.772ZM391.962 172.179C391.958 172.189 391.953 172.198 391.949 172.208C392.026 172.271 392.105 172.332 392.18 172.397C392.278 172.483 392.399 172.473 392.508 172.458C392.558 172.451 392.595 172.359 392.637 172.304C392.651 172.287 392.663 172.268 392.672 172.248C392.715 172.153 392.781 172.12 392.886 172.147C393 172.176 393.118 172.19 393.238 172.211C393.293 172.091 393.345 171.979 393.397 171.867C393.472 171.706 393.439 171.72 393.619 171.725C393.699 171.727 393.779 171.73 393.858 171.73C393.939 171.73 394.052 171.638 394.047 171.562C394.04 171.445 394.017 171.328 393.997 171.18C393.931 171.261 393.882 171.317 393.839 171.376C393.807 171.42 393.769 171.438 393.714 171.435C393.608 171.429 393.502 171.433 393.396 171.424C393.321 171.418 393.283 171.447 393.252 171.511C393.188 171.646 393.116 171.778 393.046 171.915C392.879 171.889 392.719 171.863 392.559 171.838C392.493 171.971 392.433 172.094 392.37 172.219C392.229 172.205 392.095 172.192 391.962 172.179ZM403.391 172.219C403.324 172.085 403.264 171.963 403.201 171.836C403.037 171.863 402.881 171.889 402.716 171.916C402.67 171.827 402.627 171.741 402.581 171.655C402.542 171.581 402.516 171.482 402.454 171.444C402.392 171.407 402.292 171.431 402.208 171.431C402.09 171.431 401.964 171.465 401.87 171.327C401.846 171.471 401.827 171.591 401.805 171.723C401.945 171.723 402.068 171.728 402.19 171.722C402.268 171.718 402.312 171.739 402.342 171.814C402.397 171.948 402.462 172.078 402.524 172.212C402.659 172.188 402.785 172.167 402.911 172.142C402.98 172.129 403.03 172.146 403.066 172.21C403.104 172.28 403.147 172.348 403.192 172.413C403.208 172.436 403.236 172.46 403.262 172.465C403.447 172.499 403.706 172.362 403.801 172.178C403.665 172.192 403.533 172.205 403.391 172.219ZM392.489 172.569C392.639 172.658 392.781 172.704 392.925 172.744C392.955 172.753 392.995 172.738 393.026 172.726C393.45 172.555 393.806 172.279 394.17 172.003C394.142 171.913 394.118 171.831 394.09 171.739C393.578 172.067 393.089 172.403 392.489 172.569ZM403.246 172.587C402.993 172.472 402.739 172.369 402.498 172.243C402.252 172.114 402.018 171.961 401.773 171.815C401.743 171.903 401.716 171.986 401.685 172.076C401.81 172.168 401.927 172.264 402.054 172.342C402.265 172.472 402.483 172.591 402.699 172.712C402.736 172.732 402.787 172.753 402.825 172.745C402.975 172.712 403.117 172.655 403.246 172.587ZM409.677 183.586C409.82 183.61 409.943 183.626 410.064 183.652C410.162 183.673 410.225 183.644 410.292 183.566C410.48 183.346 410.424 183.351 410.698 183.428C410.726 183.435 410.773 183.428 410.79 183.408C410.898 183.293 410.954 183.154 410.969 182.966C410.898 183.053 410.846 183.117 410.788 183.188C410.64 183.147 410.493 183.106 410.347 183.065C410.256 183.187 410.172 183.3 410.087 183.412C409.945 183.362 409.812 183.315 409.663 183.261C409.668 183.377 409.672 183.476 409.677 183.586ZM385.298 183.016C385.183 183.044 385.076 183.068 384.97 183.096C384.905 183.114 384.842 183.132 384.788 183.036C384.782 183.104 384.779 183.143 384.777 183.181C384.776 183.195 384.777 183.208 384.781 183.221C384.808 183.315 384.908 183.376 385.006 183.345C385.133 183.305 385.228 183.332 385.299 183.448C385.328 183.497 385.368 183.54 385.409 183.58C385.432 183.602 385.468 183.626 385.497 183.624C385.65 183.613 385.803 183.594 385.958 183.577C385.981 183.466 385.991 183.365 385.974 183.255C385.828 183.299 385.694 183.339 385.557 183.38C385.47 183.257 385.388 183.142 385.298 183.016ZM393.988 170.814C393.982 170.809 393.975 170.803 393.968 170.797C393.944 170.816 393.92 170.833 393.896 170.852C393.525 171.157 393.119 171.409 392.679 171.6C392.408 171.717 392.127 171.814 391.851 171.921C391.819 171.933 391.788 171.95 391.756 171.965C391.761 171.976 391.765 171.988 391.769 172C391.805 171.993 391.841 171.989 391.876 171.977C392.311 171.828 392.735 171.653 393.149 171.449C393.454 171.298 393.71 171.081 393.96 170.856C393.972 170.845 393.979 170.828 393.988 170.814ZM403.993 171.994C403.997 171.981 404.001 171.967 404.005 171.953C403.25 171.712 402.534 171.392 401.904 170.899C401.907 170.928 401.914 170.954 401.931 170.968C402.099 171.097 402.258 171.241 402.44 171.348C402.902 171.621 403.403 171.81 403.909 171.985C403.935 171.994 403.965 171.992 403.993 171.994ZM393.169 172.811C393.255 172.886 393.323 172.866 393.394 172.815C393.645 172.634 393.897 172.455 394.148 172.276C394.173 172.258 394.202 172.242 394.219 172.218C394.231 172.202 394.226 172.173 394.23 172.126C393.881 172.382 393.556 172.632 393.169 172.811ZM402.574 172.828C402.255 172.622 401.942 172.42 401.629 172.218C401.587 172.265 401.626 172.285 401.653 172.304C401.898 172.479 402.144 172.652 402.389 172.828C402.455 172.876 402.516 172.872 402.574 172.828ZM394.397 172.527C394.182 172.683 393.971 172.836 393.752 172.994C393.828 173.031 393.878 173.018 393.928 172.98C394.077 172.87 394.228 172.763 394.378 172.654C394.401 172.637 394.421 172.615 394.444 172.593C394.427 172.569 394.415 172.552 394.397 172.527ZM401.432 172.576C401.414 172.605 401.401 172.626 401.382 172.655C401.526 172.758 401.666 172.858 401.805 172.959C401.849 172.991 401.892 172.989 401.955 172.956C401.778 172.827 401.613 172.707 401.432 172.576ZM394.07 173.042C394.242 173.083 394.243 173.085 394.336 172.99C394.398 172.928 394.455 172.861 394.511 172.794C394.524 172.779 394.523 172.754 394.535 172.704C394.368 172.825 394.228 172.927 394.07 173.042ZM392.53 171.366C392.486 171.353 392.432 171.337 392.388 171.324C392.362 171.364 392.333 171.411 392.307 171.451C392.335 171.484 392.371 171.525 392.402 171.56C392.445 171.544 392.494 171.525 392.531 171.511C392.53 171.461 392.53 171.409 392.53 171.366ZM401.634 173.001C401.518 172.916 401.412 172.834 401.279 172.746C401.283 172.797 401.277 172.822 401.287 172.834C401.325 172.883 401.37 172.926 401.409 172.974C401.471 173.05 401.541 173.05 401.634 173.001ZM403.242 171.373C403.235 171.423 403.228 171.471 403.222 171.509C403.272 171.528 403.325 171.548 403.387 171.572C403.35 171.494 403.42 171.477 403.463 171.458C403.427 171.408 403.397 171.366 403.367 171.323C403.332 171.337 403.287 171.355 403.242 171.373Z' />
        <path d='M404.619 178.041C404.62 178.924 403.905 179.64 403.021 179.64C402.138 179.641 401.422 178.925 401.422 178.041C401.422 177.157 402.138 176.442 403.022 176.443C403.905 176.444 404.619 177.158 404.619 178.041ZM404.535 178.042C404.535 177.206 403.857 176.528 403.022 176.527C402.186 176.527 401.507 177.204 401.506 178.04C401.506 178.877 402.183 179.555 403.019 179.556C403.856 179.556 404.535 178.878 404.535 178.042Z' />
        <path d='M403.083 178.399C402.997 178.399 402.912 178.395 402.827 178.384C402.817 178.383 402.81 178.38 402.804 178.371C402.698 178.212 402.593 178.053 402.486 177.894C402.478 177.882 402.476 177.871 402.481 177.859C402.497 177.817 402.511 177.775 402.53 177.735C402.561 177.668 402.599 177.603 402.629 177.535C402.649 177.492 402.677 177.453 402.7 177.411C402.703 177.407 402.709 177.402 402.714 177.402C402.868 177.381 403.023 177.375 403.178 177.388C403.228 177.392 403.279 177.395 403.33 177.399C403.334 177.4 403.341 177.404 403.343 177.408C403.367 177.445 403.39 177.482 403.413 177.52C403.472 177.618 403.522 177.72 403.572 177.822C403.583 177.846 403.585 177.869 403.577 177.894C403.561 177.946 403.538 177.994 403.512 178.041C403.471 178.118 403.433 178.196 403.381 178.266C403.356 178.299 403.331 178.332 403.305 178.366C403.293 178.382 403.277 178.39 403.256 178.391C403.198 178.392 403.141 178.396 403.083 178.399Z' />
        <path d='M403.058 178.48C403.121 178.478 403.213 178.475 403.305 178.472C403.316 178.471 403.323 178.474 403.33 178.482C403.415 178.593 403.495 178.706 403.573 178.822C403.59 178.848 403.591 178.872 403.575 178.898C403.533 178.968 403.492 179.04 403.449 179.109C403.43 179.14 403.407 179.17 403.384 179.198C403.375 179.209 403.362 179.219 403.348 179.222C403.306 179.234 403.264 179.244 403.221 179.25C403.098 179.267 402.976 179.272 402.852 179.268C402.805 179.266 402.758 179.259 402.711 179.253C402.689 179.25 402.674 179.238 402.661 179.218C402.597 179.113 402.538 179.005 402.486 178.894C402.482 178.886 402.482 178.88 402.487 178.874C402.512 178.843 402.536 178.812 402.56 178.781C402.617 178.71 402.674 178.638 402.73 178.566C402.753 178.537 402.775 178.507 402.797 178.477C402.803 178.47 402.808 178.468 402.816 178.468C402.887 178.472 402.958 178.476 403.058 178.48Z' />
        <path d='M401.743 177.616C401.749 177.595 401.753 177.573 401.762 177.552C401.816 177.417 401.892 177.293 401.982 177.179C402.01 177.144 402.038 177.109 402.066 177.075C402.07 177.07 402.076 177.065 402.082 177.064C402.196 177.034 402.311 177.015 402.429 177.02C402.443 177.021 402.453 177.025 402.46 177.038C402.516 177.122 402.568 177.21 402.608 177.303C402.626 177.345 402.626 177.382 402.602 177.422C402.563 177.488 402.527 177.555 402.49 177.622C402.454 177.687 402.429 177.755 402.405 177.824C402.4 177.838 402.394 177.844 402.379 177.845C402.273 177.853 402.169 177.869 402.067 177.893C402.01 177.906 401.954 177.918 401.897 177.932C401.887 177.934 401.88 177.934 401.875 177.922C401.836 177.838 401.796 177.754 401.758 177.67C401.751 177.654 401.748 177.635 401.743 177.616Z' />
        <path d='M403.709 177.004C403.74 177.004 403.771 177.003 403.802 177.004C403.868 177.008 403.93 177.023 403.974 177.076C404.007 177.115 404.04 177.154 404.07 177.195C404.127 177.274 404.178 177.357 404.219 177.445C404.243 177.496 404.26 177.55 404.278 177.603C404.282 177.613 404.28 177.626 404.276 177.635C404.265 177.66 404.254 177.685 404.239 177.705C404.201 177.757 404.159 177.806 404.12 177.855C404.11 177.867 404.101 177.879 404.092 177.892C404.083 177.903 404.073 177.908 404.058 177.905C403.993 177.896 403.929 177.889 403.864 177.878C403.805 177.869 403.746 177.858 403.687 177.848C403.678 177.846 403.673 177.842 403.669 177.833C403.641 177.758 403.603 177.688 403.562 177.619C403.518 177.543 403.473 177.467 403.428 177.392C403.412 177.366 403.412 177.342 403.422 177.315C403.463 177.21 403.515 177.111 403.577 177.017C403.583 177.007 403.591 177.002 403.603 177.002C403.638 177.003 403.674 177.002 403.71 177.002C403.709 177.003 403.709 177.004 403.709 177.004Z' />
        <path d='M404.145 178.623C404.197 178.649 404.249 178.674 404.3 178.701C404.303 178.702 404.306 178.71 404.305 178.712C404.297 178.73 404.29 178.749 404.28 178.765C404.237 178.826 404.194 178.887 404.15 178.946C404.045 179.088 403.91 179.197 403.761 179.287C403.701 179.323 403.636 179.349 403.573 179.379C403.557 179.387 403.544 179.385 403.531 179.371C403.503 179.341 403.474 179.312 403.445 179.284C403.437 179.276 403.437 179.27 403.442 179.262C403.447 179.256 403.451 179.248 403.456 179.242C403.54 179.139 403.607 179.025 403.661 178.903C403.672 178.877 403.687 178.864 403.717 178.857C403.829 178.83 403.935 178.785 404.03 178.718C404.063 178.694 404.094 178.666 404.126 178.64C404.133 178.635 404.138 178.629 404.145 178.623Z' />
        <path d='M401.754 178.741C401.771 178.731 401.788 178.721 401.806 178.711C401.833 178.697 401.861 178.683 401.888 178.668C401.901 178.661 401.91 178.662 401.921 178.673C401.956 178.706 401.993 178.738 402.035 178.764C402.134 178.825 402.24 178.867 402.354 178.888C402.391 178.894 402.392 178.894 402.408 178.928C402.464 179.049 402.531 179.163 402.6 179.277C402.602 179.28 402.603 179.283 402.606 179.288C402.602 179.292 402.598 179.296 402.593 179.299C402.559 179.325 402.526 179.351 402.499 179.384C402.497 179.387 402.489 179.389 402.485 179.387C402.462 179.378 402.438 179.37 402.416 179.359C402.313 179.311 402.222 179.243 402.13 179.175C402.051 179.117 401.976 179.052 401.913 178.976C401.862 178.913 401.814 178.848 401.772 178.779C401.766 178.769 401.761 178.759 401.756 178.748C401.755 178.747 401.755 178.744 401.754 178.741Z' />
        <path d='M404.48 178.026C404.479 178.131 404.467 178.235 404.453 178.339C404.44 178.433 404.409 178.522 404.37 178.607C404.358 178.634 404.361 178.633 404.334 178.621C404.288 178.6 404.243 178.577 404.198 178.554C404.195 178.552 404.192 178.546 404.192 178.543C404.196 178.512 404.202 178.482 404.203 178.452C404.207 178.386 404.212 178.32 404.207 178.253C404.2 178.153 404.185 178.054 404.158 177.957C404.156 177.953 404.159 177.946 404.162 177.942C404.18 177.923 404.199 177.905 404.216 177.886C404.247 177.852 404.27 177.812 404.292 177.772C404.307 177.745 404.323 177.718 404.338 177.69C404.342 177.683 404.347 177.681 404.354 177.682C404.372 177.685 404.39 177.686 404.407 177.687C404.428 177.689 404.442 177.7 404.446 177.72C404.455 177.757 404.464 177.794 404.468 177.832C404.475 177.896 404.479 177.961 404.484 178.025C404.483 178.026 404.481 178.026 404.48 178.026Z' />
        <path d='M401.68 177.698C401.69 177.721 401.699 177.744 401.709 177.767C401.729 177.812 401.748 177.857 401.768 177.902C401.78 177.927 401.794 177.951 401.808 177.975C401.816 177.989 401.818 178.004 401.815 178.02C401.804 178.098 401.797 178.176 401.798 178.254C401.8 178.34 401.816 178.424 401.838 178.507C401.844 178.531 401.848 178.555 401.854 178.579C401.856 178.588 401.853 178.593 401.845 178.597C401.805 178.617 401.766 178.637 401.727 178.657C401.724 178.659 401.72 178.66 401.715 178.663C401.706 178.646 401.696 178.631 401.689 178.614C401.648 178.525 401.624 178.431 401.603 178.335C401.587 178.258 401.575 178.18 401.572 178.101C401.568 177.987 401.578 177.875 401.602 177.763C401.604 177.75 401.606 177.738 401.609 177.725C401.61 177.721 401.614 177.716 401.618 177.714C401.637 177.709 401.657 177.704 401.68 177.698Z' />
        <path d='M402.981 176.592C402.982 176.617 402.983 176.639 402.983 176.662C402.983 176.664 402.977 176.668 402.974 176.669C402.916 176.691 402.859 176.711 402.803 176.733C402.732 176.761 402.661 176.79 402.598 176.833C402.56 176.858 402.523 176.887 402.487 176.915C402.471 176.929 402.453 176.938 402.431 176.938C402.334 176.936 402.239 176.957 402.143 176.973C402.114 176.977 402.085 176.98 402.057 176.984C402.056 176.982 402.055 176.981 402.054 176.979C402.058 176.97 402.061 176.96 402.068 176.954C402.083 176.937 402.1 176.922 402.118 176.907C402.206 176.837 402.306 176.788 402.407 176.741C402.492 176.701 402.579 176.664 402.668 176.636C402.738 176.614 402.811 176.6 402.885 176.596C402.913 176.594 402.94 176.593 402.968 176.592C402.972 176.592 402.975 176.592 402.981 176.592Z' />
        <path d='M403.903 176.934C403.869 176.929 403.838 176.925 403.806 176.92C403.736 176.911 403.666 176.911 403.596 176.914C403.594 176.914 403.592 176.914 403.59 176.915C403.558 176.92 403.533 176.911 403.508 176.886C403.456 176.834 403.391 176.799 403.322 176.771C403.238 176.736 403.151 176.704 403.065 176.671C403.061 176.669 403.057 176.667 403.054 176.666C403.054 176.642 403.054 176.618 403.054 176.593C403.063 176.592 403.072 176.591 403.08 176.591C403.175 176.589 403.268 176.602 403.36 176.624C403.52 176.661 403.67 176.719 403.807 176.81C403.841 176.832 403.872 176.858 403.903 176.882C403.907 176.885 403.909 176.893 403.909 176.898C403.908 176.91 403.905 176.921 403.903 176.934Z' />
      </g>
      <defs>
        <clipPath id='clip0_47_954'>
          <rect width='48' height='48' transform='translate(374 163)' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default NumberModelSix
