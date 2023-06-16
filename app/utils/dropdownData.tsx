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
                url: "dsdgdf",
            },
            {
                label: "Sign in",
                url: "dsdwegdf",
            },
            {
                label: "Logout",
                url: "dsdgdf",
            },
        ],
    },
]

export { IDropdownProps, IDropdownLiProps, dropdownData }
