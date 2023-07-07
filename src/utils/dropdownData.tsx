interface IDropdownLiProps {
    url: string
    label: string
}

interface IDropdownProps {
    label: string
    options: IDropdownLiProps[]
    lang?: boolean
}

type DropdownData = IDropdownProps[]

const dropdownData: DropdownData = [
    {
        label: "Language",
        options: [
            {
                label: "English",
                url: "wefwe",
            },
            {
                label: "German",
                url: "gre",
            },
            {
                label: "Polish",
                url: "gr",
            },
        ],
        lang: true,
    },
    {
        label: "Login",
        options: [
            {
                label: "Login",
                url: "/login",
            },
            {
                label: "Sign in",
                url: "/sign-in",
            },
            {
                label: "Logout",
                url: "/logout",
            },
        ],
    },
]

export { IDropdownProps, IDropdownLiProps, dropdownData }
