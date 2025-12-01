interface Entitlement {

    id: string
    name: string
    properties: {

        type: string
        plan: string
        ram: string
        cpu: string
        hdd: string
        
    }

    expired: boolean
    expiresAt: number
    price: number
    autoRenew: boolean
    subdomain: string

}

export default Entitlement