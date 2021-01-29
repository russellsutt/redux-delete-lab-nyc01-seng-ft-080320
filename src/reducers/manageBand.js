import { v4 as uuidv4 } from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = { bandName: action.band.bandName, id: uuidv4()}
      return { ...state, bands: [...state.bands, newBand] }
    
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.bandId)
      return { bands }

    default:
      return state;
  }
};
