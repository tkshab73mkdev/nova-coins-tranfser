// src/util.js
const { EmbedBuilder } = require('discord.js');

/**
 * Creates a purchase embed with the required details.
 * @param {number} price - Base price of the package.
 * @param {string} bank - Bank account to send the gold to.
 * @param {Object} options - Additional customization options.
 * @param {string} [options.title='الدعم'] - Title of the embed.

 * @param {string} [options.color='#00FF00'] - Color of the embed.
 * @returns {EmbedBuilder} - The purchase embed.
 */
function createPurchaseEmbed(price, bank, options = {}) {
    const tax = Math.floor(price * 20 / 19 + 1);
    const finalAmount = tax;

    const {
        title = 'الدعم',
            footer = message.guild.name,
            color = '#00FF00'
    } = options;

    return new EmbedBuilder()
        .setColor(color)
        .setTitle(title)
        .setDescription(`**> للدعم **\n**يرجى تحويل ${finalAmount} ذهب إلى ${bank}**\n\`!golds ${bank} ${finalAmount}\``)
        .setFooter({ text: footer });
}

/**
 * Checks if a confirmation message matches the expected format.
 * @param {string} content - Message content to check.
 * @param {string} bank - Bank account ID.
 * @param {string} botid - Bot account ID
 * @param {number} price - Base price of the package.
 * @returns {boolean} - Whether the message confirms the purchase.
 */
function isConfirmationMessage(content, bank, price, botid) {
    const cleanedContent = content
        .replace(/[`*]+/g, '')
        .replace(/<:.+?:(\d+)>/g, '')
        .trim();

    const patterns = [
        `has transferred $${price} gold to <@${bank}>`,
        `قد حولت ${price}$ ذهب إلى <@${bank}>`
    ];

    return patterns.some(pattern => cleanedContent.includes(pattern)) && content.author.id === botid;
}
/**
 * Calculates the tax and final amount based on a price.
 * @param {number} price - Base price of the package.
 * @returns {number} - The final amount after tax.
 */
function TaX(price) {
    const tax = Math.floor((price * 20) / 19 + 1);
    const finalAmount = tax;

    return finalAmount;
}


module.exports = { createPurchaseEmbed, isConfirmationMessage, TaX };