import Bands from './bands';

export const bandsMutations = {
  Mutation: {
    async addBand(_, { band }) {
      try {
        const newBand = await Bands.create({
          ...band
        });
        return newBand;
      } catch (e) {
        console.log(e);
      }
    },

    async addImage(_, { bandId }) {
      try {
        const band = await Bands.findOneAndUpdate(
          {
            _id: bandId,
            'events.date': {
              $ne: date
            }
          },
          {
            $addToSet: {
              events: {
                date
              }
            }
          }
        );
        return band;
      } catch (e) {
        console.log('e', e);
      }
    },

    async removeEvent(_, { habitId, eventId }) {
      try {
        const habit = await Habits.findOneAndUpdate(
          {
            _id: habitId
          },
          {
            $pull: {
              events: {
                _id: eventId
              }
            }
          }
        );
        return habit;
      } catch (e) {
        console.log('e', e);
      }
    }
  }
};
