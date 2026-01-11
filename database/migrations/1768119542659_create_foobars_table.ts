import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'foobars'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('foo').defaultTo('foo')
      table.string('bar').defaultTo('bar')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
