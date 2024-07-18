import React from 'react';
import Svg, { Circle, ClipPath, Defs, G, Image, Mask, Path, Pattern, Rect, Use } from 'react-native-svg';
import { SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    color?: string;
    size?: number;
}

export const HomeIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Mask
                id="a"

                maskUnits="userSpaceOnUse"
                x={2}
                y={1}
                width={21}
                height={22}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 1h20.5v21.505H2V1z"
                    fill="#fff"
                />
            </Mask>
            <G mask="url(#a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.717 15.291a2.18 2.18 0 012.184 2.17v3.075c0 .257.206.463.47.47h1.906c1.502 0 2.723-1.207 2.723-2.689V9.593c-.007-.51-.25-.99-.667-1.309L13.74 3.026a2.416 2.416 0 00-3.011.002L4.18 8.282A1.675 1.675 0 003.5 9.61v8.707c0 1.482 1.22 2.688 2.723 2.688h1.924a.486.486 0 00.49-.479c0-.058.008-.116.02-.17V17.46c0-1.189.974-2.16 2.169-2.169h2.89zm4.56 7.214h-1.924c-1.102-.026-1.952-.89-1.952-1.969V17.46a.677.677 0 00-.684-.669H10.83a.677.677 0 00-.674.67v3.065c0 .075-.01.147-.031.215a1.99 1.99 0 01-1.98 1.764H6.224C3.893 22.505 2 20.626 2 18.317V9.603A3.154 3.154 0 013.259 7.1l6.535-5.245a3.912 3.912 0 014.88-.002l6.582 5.25a3.158 3.158 0 011.244 2.48v8.734c0 2.31-1.894 4.188-4.223 4.188z"
                    fill={props.color}
                />
            </G>
        </Svg>
    );
};

export const MessageIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M17.903 8.851l-4.444 3.613c-.84.666-2.02.666-2.86 0L6.12 8.851"
                stroke={props.color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                clipRule="evenodd"
                d="M16.909 21C19.95 21.008 22 18.51 22 15.438V8.57C22 5.499 19.95 3 16.909 3H7.09C4.05 3 2 5.499 2 8.57v6.868C2 18.51 4.05 21.008 7.091 21h9.818z"
                stroke={props.color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>

    )
}

export const ProfileIcon = (props: IconProps) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G
                fillRule="evenodd"
                clipRule="evenodd"
                stroke={props.color}

                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path
                    d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948z"
                    strokeWidth={1.5}
                />
                <Path
                    d="M11.985 12.006A4.596 4.596 0 107.389 7.41a4.58 4.58 0 004.563 4.596h.033z"
                    strokeWidth={1.42857}
                />
            </G>
        </Svg>
    )
}

export const CalendarIcon = (props: IconProps) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.41 2.769l.002.75c2.755.215 4.574 2.092 4.577 4.97L21 16.917c.004 3.138-1.968 5.069-5.128 5.074l-7.72.01c-3.14.004-5.137-1.973-5.141-5.12L3 8.553c-.004-2.898 1.752-4.77 4.506-5.023v-.75a.746.746 0 01.758-.77.747.747 0 01.762.769v.7l5.865-.009v-.7A.747.747 0 0115.65 2a.753.753 0 01.76.769zM4.522 8.862l14.949-.02v-.35c-.043-2.15-1.121-3.277-3.056-3.445v.77c0 .43-.334.77-.758.77a.752.752 0 01-.762-.768v-.81l-5.865.008v.81c0 .43-.324.77-.759.77a.752.752 0 01-.76-.769l-.002-.77c-1.925.193-2.99 1.325-2.988 3.493l.001.31zm10.719 4.542v.011c.01.46.385.809.84.799a.823.823 0 00.789-.852.83.83 0 00-.82-.797.828.828 0 00-.81.84zm.815 4.488a.848.848 0 01-.821-.848.833.833 0 01.809-.852h.01c.463 0 .84.379.84.849a.844.844 0 01-.838.851zm-4.883-4.472c.02.46.396.819.85.799a.823.823 0 00.78-.86.816.816 0 00-.821-.8c-.454.02-.81.402-.809.861zm.854 4.427a.823.823 0 01-.85-.799c0-.46.354-.84.809-.86a.815.815 0 01.82.797c.02.461-.335.841-.779.862zm-4.922-4.392c.02.46.396.82.85.799.445-.02.8-.4.778-.86a.815.815 0 00-.82-.8.852.852 0 00-.808.861zm.854 4.397a.822.822 0 01-.85-.799.853.853 0 01.809-.86.815.815 0 01.82.798c.021.46-.333.841-.779.861z"
                fill={props.color}

            />
        </Svg>
    )
}

export const DoctorIcon = (props: IconProps) => {
    return (
        <Svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            {...props}
        >
            <G
                clipPath="url(#clip0_37_2272)"
                stroke="#EEE"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M15 10h-2.5a5 5 0 00-5 5v8.75a13.75 13.75 0 0027.5 0V15a5 5 0 00-5-5h-2.5" />
                <Path d="M20 37.5a15 15 0 0030 0V30M27.5 7.5v5M15 7.5v5M50 30a5 5 0 100-10 5 5 0 000 10z" />
            </G>
            <Defs>
                <ClipPath id="clip0_37_2272">
                    <Path fill="#fff" d="M0 0H60V60H0z" />
                </ClipPath>
            </Defs>
        </Svg>

    )
}


export const Pharmacycon = (props: IconProps) => {
    return (
        <Svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            {...props}
        >
            <G
                stroke="#387E82"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                clipPath="url(#clip0_37_2290)"
            >
                <Path d="M17.626 44.142V15.858a12.375 12.375 0 1124.748 0v28.284a12.374 12.374 0 11-24.748 0M17.626 30h24.748" />
            </G>
            <Defs>
                <ClipPath id="clip0_37_2290">
                    <Path fill="#fff" d="M0 0H60V60H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}


export const Ambulancecon = (props: IconProps) => {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <G
                clipPath="url(#clip0_41_2316)"
                stroke="#387E82"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M9.333 25.333a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333zM22.667 25.333a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333z" />
                <Path d="M6.667 22.666H4V8a1.333 1.333 0 011.333-1.333h12v16H12h8m5.333 0H28v-8m0 0H17.333m10.667 0L24 8h-6.667M10.667 10.666V16M8 13.333h5.333H8z" />
            </G>
            <Defs>
                <ClipPath id="clip0_41_2316">
                    <Path fill="#fff" d="M0 0H32V32H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}


export const LabIcon = (props: IconProps) => {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            {...props}
        >
            <Path fill="url(#pattern0_127_759)" d="M0 0H30V30H0z" />
            <Defs>
                <Pattern
                    id="pattern0_127_759"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use xlinkHref="#image0_127_759" transform="scale(.01)" />
                </Pattern>
                <Image
                    id="image0_127_759"
                    width={100}
                    height={100}
                    xlinkHref="data:image/png;base64,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"
                />
            </Defs>
        </Svg>
    )
}

export const HospitalIcon = (props: IconProps) => {
    return (
        <Svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            {...props}
        >
            <G
                clipPath="url(#clip0_37_2302)"
                stroke="#F5F5F5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M6.25 43.75h37.5M10.417 43.75V10.417a4.167 4.167 0 014.166-4.167h20.834a4.167 4.167 0 014.166 4.167V43.75" />
                <Path d="M18.75 43.75v-8.333a4.167 4.167 0 014.167-4.167h4.166a4.167 4.167 0 014.167 4.167v8.333M20.833 18.75h8.334M25 14.583v8.334" />
            </G>
            <Defs>
                <ClipPath id="clip0_37_2302">
                    <Path fill="#fff" d="M0 0H50V50H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export const SearchIcon = (props: IconProps) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 10.67C2 5.882 5.84 2 10.578 2c2.275 0 4.456.913 6.065 2.54a8.717 8.717 0 012.512 6.13c0 4.788-3.84 8.67-8.577 8.67C5.84 19.34 2 15.458 2 10.67zm17.013 6.984l2.555 2.062h.044c.517.523.517 1.37 0 1.892a1.314 1.314 0 01-1.871 0l-2.12-2.43a1.082 1.082 0 010-1.524.986.986 0 011.392 0z"
                fill="#1C1C1C"
                fillOpacity={0.6}
            />
        </Svg>
    )
}

export const SavedIcon = (props: IconProps) => {
    return (
        <Svg
            width={43}
            height={43}
            viewBox="0 0 43 43"
            fill="none"
            {...props}
        >
            <Circle cx={21.5} cy={21.5} r={21.5} fill="#E8F3F1" />
            <Mask
                id="a"
                maskUnits="userSpaceOnUse"
                x={11}
                y={13}
                width={21}
                height={20}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 13h20.473v19.501H11V13z"
                    fill="#fff"
                />
            </Mask>
            <G mask="url(#a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.824 22.123c1.402 4.362 6.94 7.89 8.413 8.762 1.477-.882 7.056-4.448 8.413-8.758.89-2.786.064-6.315-3.222-7.374-1.592-.51-3.45-.2-4.731.792a.75.75 0 01-.91.006 5.234 5.234 0 00-4.75-.798c-3.28 1.058-4.104 4.587-3.213 7.37zm8.414 10.378a.748.748 0 01-.36-.09c-.312-.172-7.685-4.236-9.482-9.83h-.001c-1.128-3.523.128-7.949 4.183-9.256a6.729 6.729 0 015.657.714c1.626-1.028 3.786-1.312 5.652-.714 4.059 1.31 5.319 5.734 4.192 9.255-1.74 5.53-9.166 9.655-9.481 9.828a.743.743 0 01-.36.093z"
                    fill="#387E82"
                />
            </G>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.154 20.625a.75.75 0 01-.747-.69 2.024 2.024 0 00-1.4-1.768.75.75 0 01.46-1.428 3.525 3.525 0 012.436 3.075.75.75 0 01-.75.81z"
                fill="#387E82"
            />
        </Svg>
    )
}

export const PaymentHistoryIcon = (props: IconProps) => {
    return (
        <Svg
            width={43}
            height={43}
            viewBox="0 0 43 43"
            fill="none"
            {...props}
        >
            <Circle cx={21.5} cy={21.5} r={21.5} fill="#E8F3F1" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.889 24.896H26.84a3.446 3.446 0 01-3.442-3.44 3.447 3.447 0 013.442-3.442h4.048a.75.75 0 010 1.5H26.84a1.945 1.945 0 00-1.942 1.942c0 1.069.872 1.94 1.942 1.94h4.048a.75.75 0 010 1.5z"
                fill="#199A8E"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.298 22.144h-.312a.75.75 0 010-1.5h.312a.75.75 0 010 1.5z"
                fill="#199A8E"
            />
            <Mask
                id="a"
                maskUnits="userSpaceOnUse"
                x={11}
                y={12}
                width={21}
                height={20}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 12h20.639v19.173H11V12z"
                    fill="#fff"
                />
            </Mask>
            <G mask="url(#a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.998 13.5a4.503 4.503 0 00-4.498 4.498v7.177a4.503 4.503 0 004.498 4.498h8.644a4.503 4.503 0 004.497-4.498v-7.177a4.503 4.503 0 00-4.497-4.498h-8.644zm8.644 17.673h-8.644A6.005 6.005 0 0111 25.175v-7.177A6.005 6.005 0 0116.998 12h8.644a6.004 6.004 0 015.997 5.998v7.177a6.004 6.004 0 01-5.997 5.998z"
                    fill="#199A8E"
                />
            </G>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.685 18.038h-5.4a.75.75 0 010-1.5h5.4a.75.75 0 010 1.5z"
                fill="#199A8E"
            />
        </Svg>
    )
}

export const AppointmentIcon = (props: IconProps) => {
    return (
        <Svg
            width={43}
            height={43}
            viewBox="0 0 43 43"
            fill="none"
            {...props}
        >
            <Circle cx={21.5} cy={21.5} r={21.5} fill="#E8F3F1" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.716 25.974h-7.22a.75.75 0 010-1.5h7.22a.75.75 0 010 1.5zM24.716 21.787h-7.22a.75.75 0 010-1.5h7.22a.75.75 0 010 1.5zM20.25 17.61h-2.755a.75.75 0 010-1.5h2.755a.75.75 0 010 1.5z"
                fill="#199A8E"
            />
            <Mask
                id="a"
                maskUnits="userSpaceOnUse"
                x={12}
                y={11}
                width={19}
                height={20}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 11h18.165v19.91H12V11z"
                    fill="#fff"
                />
            </Mask>
            <G mask="url(#a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.909 12.5l-7.69.004c-2.327.014-3.72 1.454-3.72 3.853v9.196c0 2.415 1.406 3.857 3.757 3.857l7.689-.003c2.328-.014 3.72-1.456 3.72-3.854v-9.196c0-2.415-1.404-3.857-3.756-3.857zm-7.652 18.41c-3.144 0-5.257-2.153-5.257-5.357v-9.196c0-3.233 2.047-5.334 5.215-5.353L24.908 11c3.145 0 5.257 2.153 5.257 5.357v9.196c0 3.232-2.047 5.334-5.215 5.354l-7.693.003z"
                    fill="#199A8E"
                />
            </G>
        </Svg>
    )
}

export const FaqIcon = (props: IconProps) => {
    return (
        <Svg
            width={43}
            height={43}
            viewBox="0 0 43 43"
            fill="none"
            {...props}
        >
            <Circle cx={21.5} cy={21.5} r={21.5} fill="#E8F3F1" />
            <Mask
                id="a"
                maskUnits="userSpaceOnUse"
                x={10}
                y={11}
                width={22}
                height={22}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 11h21.493v21.494H10V11.001z"
                    fill="#fff"
                />
            </Mask>
            <G mask="url(#a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.108 29.675c.58 0 1.127.22 1.706.453 3.547 1.64 7.742.895 10.475-1.837 3.606-3.608 3.606-9.477 0-13.084a9.186 9.186 0 00-6.54-2.707 9.186 9.186 0 00-6.54 2.709c-2.735 2.732-3.479 6.927-1.854 10.44.234.578.46 1.142.46 1.729 0 .584-.2 1.174-.378 1.694-.146.428-.367 1.073-.225 1.216.14.143.79-.084 1.218-.23.515-.177 1.1-.378 1.678-.383zm5.616 2.82c-1.528 0-3.066-.323-4.505-.99-.424-.17-.82-.33-1.106-.33-.328.002-.769.154-1.195.302-.874.3-1.962.674-2.767-.128-.802-.803-.432-1.889-.134-2.762.147-.43.298-.873.298-1.21 0-.275-.133-.627-.337-1.134-1.873-4.045-1.007-8.92 2.17-12.095a10.674 10.674 0 017.6-3.147c2.873 0 5.573 1.117 7.601 3.146 4.192 4.191 4.192 11.011 0 15.204a10.783 10.783 0 01-7.625 3.144z"
                    fill="#199A8E"
                />
            </G>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.696 23.163a1.003 1.003 0 01-1.004-1c0-.553.443-1 .995-1h.01a1 1 0 110 2zM20.688 23.163a1.003 1.003 0 01-1.005-1c0-.553.442-1 .995-1h.01a1 1 0 110 2zM16.678 23.163a1.003 1.003 0 01-1.004-1c0-.553.443-1 .995-1h.01a1 1 0 110 2z"
                fill="#199A8E"
            />
        </Svg>
    )
}

export const LogoutIcon = (props: IconProps) => {
    return (
        <Svg
            width={43}
            height={43}
            viewBox="0 0 43 43"
            fill="none"
            {...props}
        >
            <Circle cx={21.5} cy={21.5} r={21.5} fill="#E8F3F1" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 13.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5zM21 32c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"
                fill="#FE5C5C"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.994 23.373a.75.75 0 01-.75-.75v-4.419a.75.75 0 011.5 0v4.42a.75.75 0 01-.75.75zM21.004 26.796a1.003 1.003 0 01-1.005-1c0-.553.443-1 .995-1h.01a1 1 0 110 2z"
                fill="#FE5C5C"
            />
        </Svg>
    )
}


export const HeartBeatIcon = (props: IconProps) => {
    return (

        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <Path
                d="M22 4a7.482 7.482 0 00-6 2.995A7.502 7.502 0 002.5 11.5c.008 1.193.216 2.376.616 3.5h5.349l1.703-2.555a1 1 0 011.664 0L15 17.197l1.168-1.752A1 1 0 0117 15h3a1 1 0 010 2h-2.465l-1.703 2.555a1 1 0 01-1.664 0L11 14.803l-1.168 1.752A1 1 0 019 17H3.998c3.331 6.226 11.097 10.64 11.513 10.872a1 1 0 00.978 0 39.664 39.664 0 006.43-4.691C27.286 19.25 29.5 15.32 29.5 11.5A7.509 7.509 0 0022 4z"
                fill="#1C1C1C"
            />
        </Svg>
    )
}

export const CaloriesIcon = (props: IconProps) => {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <Path
                d="M24.641 8.325c-1.634-2.602-3.739-4.834-5.582-6.674a1 1 0 00-1.609.278l-3.856 8.098-4.035-2.69a1 1 0 00-1.388.28C5.735 11.289 4.5 14.614 4.5 17.5a11.5 11.5 0 1023 0c0-3.11-.935-6.11-2.859-9.175zm-1.23 10.328a7.462 7.462 0 01-6.258 6.259 1 1 0 11-.305-1.977 5.54 5.54 0 004.587-4.588 1.001 1.001 0 011.977.305z"
                fill="#1C1C1C"
            />
        </Svg>
    )
}

export const WeightIcon = (props: IconProps) => {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <Path
                d="M31 15h-1v-4a2.002 2.002 0 00-2-2h-2V8a2.002 2.002 0 00-2-2h-3a2.002 2.002 0 00-2 2v7h-6V8a2.002 2.002 0 00-2-2H8a2.002 2.002 0 00-2 2v1H4a2.002 2.002 0 00-2 2v4H1a1 1 0 000 2h1v4a2.002 2.002 0 002 2h2v1a2.002 2.002 0 002 2h3a2.002 2.002 0 002-2v-7h6v7a2.002 2.002 0 002 2h3a2.002 2.002 0 002-2v-1h2a2.002 2.002 0 002-2v-4h1a1 1 0 000-2zM4 21V11h2v10H4zm24 0h-2V11h2v10z"
                fill="#1C1C1C"
            />
        </Svg>
    )
}