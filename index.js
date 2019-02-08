require('dotenv').load({path: '.env'})

const Discord = require('discord.js')

const classes = require('./classes')
const abilities = require('./abilities')
const races = require('./races')
const snecko = require('./snecko')
const stances = require('./stances')
const conditions = require('./conditions')

const standalones = require('./standalones')

const queryables = {
	class: classes,
	abilities,
	ability: abilities,
	races,
	race: races,
	snecko,
	stances,
	stance: stances,
	conditions,
	condition: conditions,
	statuses: conditions,
	status: conditions
}

const client = new Discord.Client()

const minesweeper = {
	b: 'bomb',
	0: 'white_large_square',
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight'
}

function splitAndReply(msg, message) {
	msg.reply(message, { split: true })
}

client.on('message', msg => {
	if (msg.content.charAt(0) === '!') {
		const command = msg.content.split(' ')[0].substring(1).toLowerCase()
		let query = msg.content.split(' ').slice(1, 2)[0]
		query = query ? query.toLowerCase() : query

		if (command in queryables) {
			if (query in queryables[command]) {
				splitAndReply(msg, queryables[command][query])
			} else {
				splitAndReply(msg, 'Error: ' + query + ' is not a recognized ' + command + '.\n' +
					'Recognized entries are:\n' +
					'- ' + Object.keys(queryables[command]).join('\n- '))
			}
		} else if (command in standalones) {
			splitAndReply(msg, standalones[command])
		} else if (command === 'roll' && /[0-9]*(d[0-9]*)?$/.test(query)) {
			const numberToRoll = Math.min(25, query.split('d')[0] || 1)
			const numberOfSides = Math.min(1000, (query.split('d')[1] || 6)) - 1
			let result = 0
			let rolls = []
			for (let i = 0; i < numberToRoll; i++) {
				const roll = Math.round(Math.random() * numberOfSides) + 1
				result += roll
				rolls.push(roll)
			}
			splitAndReply(msg, "Rolled " + numberToRoll + " " + (numberOfSides + 1) + "-sided " +
				(numberToRoll == 1 ? "die" : "dice") + " and got **" + result + "**" + (rolls.length > 1 ? " (" +
				rolls.join(' + ') + ")" : ''))
		} else if (command === 'minesweeper' || command === 'ms') {
			const width = 9
			const height = 9
			const mines = 10

			const field = [...new Array(height)].map((u, i) => [...new Array(width)].map(() => 0))
			for (let i = 0; i < mines; i++) {
				let x, y
				do {
					x = Math.floor(Math.random() * width)
					y = Math.floor(Math.random() * height)
				} while (field[y][x] === 'b')
				field[y][x] = 'b'
				for (let i = 0; i < 9; i++) {
					if (i === 4) continue

					let nY = y -1 + Math.floor(i / 3)
					let nX = x - 1 + (i % 3)

					if (nY < 0 || nY >= height || nX < 0 || nX >= width || field[nY][nX] === 'b')
						continue

					field[nY][nX]++
				}				
			}
			msg.reply('Here\'s your minesweeper field:\n' +
				field.map(arr => arr.map(key => `||:${minesweeper[key]}:||`).join(' ')).join('\n'))
		} else {
			Object.values(queryables).some(q => {
				if (command in q) {
					splitAndReply(msg, q[command])
					return true
				}
				return false
			})
		}
	}
})

client.login(process.env.BOT_TOKEN)
