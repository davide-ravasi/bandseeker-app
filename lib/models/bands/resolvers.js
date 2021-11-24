/* eslint-disable no-empty-pattern */
import { Band } from './band'

const bandResolvers = {
  Query: {
    getBands: async () => {
      try {
        const bands = await Band.find({})

        return bands
      } catch (err) {
        console.log(err)
      }
    },
    getBand: async (_, { id }) => {
      const band = await Band.findById(id)

      if (!band) {
        throw new Error('Band not found')
      }

      return band
    },
    getBandsByContent: async (_, { text }) => {
      try {
        const bands = await Band.find({})

        const filterBands = bands.filter(band => band.name?.includes(text) || band.description?.includes(text));

        return filterBands
      } catch (err) {
        console.log(err)
      }
    },
  },

  Mutation: {
    newBand: async (_, { input }) => {
      try {
        const band = new Band(input)

        const result = await band.save()

        return result
      } catch (err) {
        console.log(err)
      }
    },
    updateBand: async (_, { id, input }) => {
      let band = await Band.findById(id)

      if (!band) {
        throw new Error('Band not found')
      }

      band = await Band.findOneAndUpdate({ _id: id }, input, {
        new: true,
      })

      return band
    },
    deleteBand: async (_, { id }) => {
      const band = await Band.findById(id)

      if (!band) {
        throw new Error('Band not found')
      }

      await Band.findOneAndDelete({ _id: id })

      return 'Band removed'
    },
  },
}

module.exports = bandResolvers
