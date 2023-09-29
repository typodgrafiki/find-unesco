export interface IUnescoObjestProps {
    key: string
    name: string
    short_description: string
    longitude?: number
    latitude?: number
    category?: string
    states_name?: string[]
    region?: string
    iso_code?: string
    udnp_code?: string
    image?: string
    link?: string
    homapege?: boolean
    index?: number

    // name: string
    // category: string
    // image?: string
    // states_name: string[]
    // short_description: string
    // link: string
    // index: number
    // homepage: boolean

    // key: string
    // name: string
    // category: string
    // image?: string | undefined
    // states_name: string[]
    // short_description: string
    // index: number
    // link?: string
}
