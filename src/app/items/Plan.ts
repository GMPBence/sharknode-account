interface Plan {

    id: string
    name: string
    price: string

    cpu: number
    disk: number
    ram: number
    
    isPremiumNode: boolean

}

export default Plan