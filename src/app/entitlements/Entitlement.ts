interface Entitlement {

    id: string
    name: string
    properties: {

        type: string
        typeName: string
        planName: string
        ram: string
        cpu: string
        disk: string
        
    }

    expired: boolean
    expiresAt: number
    price: number
    autoRenew: boolean
    subdomain: string

}

export default Entitlement