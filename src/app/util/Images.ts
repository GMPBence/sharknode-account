import SimpleCodec from "./SimpleCodec";

import minecraft_logo from '../../assets/img/minecraft_logo.png'
import paper from '../../assets/img/services/papermc.webp'
import spigot from '../../assets/img/services/spigot.png'
import forge from '../../assets/img/services/forge.jpeg'
import neoforge from '../../assets/img/services/neoforge.png'
import fabric from '../../assets/img/services/fabric.png'
import purpur from '../../assets/img/services/purpur.png'
import folia from '../../assets/img/services/folia.png'

import velocity from '../../assets/img/services/velocity.png'
import bungee from '../../assets/img/services/bungeecord.webp'

class Images extends SimpleCodec<any> {

    constructor() {
        super()
        this.fill()
    }

    public fill(): void {
        this.add('minecraft-vanilla', minecraft_logo)
        this.add('minecraft-paper', paper)
        this.add('minecraft-spigot', spigot)
        this.add('minecraft-forge', forge)
        this.add('minecraft-neoforge', neoforge)
        this.add('minecraft-fabric', fabric)
        this.add('minecraft-purpur', purpur)
        this.add('minecraft-folia', folia)

        this.add('minecraft-velocity', velocity)
        this.add('minecraft-bungeecord', bungee)
    }

}

export default Images