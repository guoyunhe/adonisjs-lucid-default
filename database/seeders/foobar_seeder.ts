import Foobar from '#models/foobar'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const foobar = await Foobar.create({})
    console.log('foo:', foobar.foo)
    console.log('bar:', foobar.bar)
  }
}
