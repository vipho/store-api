'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async create(data, { files } = {}) {
    const entry = await strapi.query('order').create(data);

    if (files) {
      // automatically uploads the files based on the entry and the model
      await this.uploadFiles(entry, files, { model: strapi.models.orders });
      return this.findOne({ id: entry.id });
    }

    strapi.plugins['email'].services.email.send({
      to: ['vadim.uart@gmail.com', 'hey@vipho.io'],
      subject: 'Новый заказ!',
      // text: '',
      html: `Пора зайти <a href="https://api.teddybear.pp.ua/admin">админку</a>.<br>${JSON.stringify(data)}`,
    });

    return entry;
  },
};
