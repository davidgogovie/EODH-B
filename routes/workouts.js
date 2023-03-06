const express = require('express')
const {
  getWorkoutsFromJsonServer,
  getHighlightersFromJsonServer,
  getStyledSelectionsFromJsonServer,
  getCommentedSelectionsFromJsonServer,
  getTextToSpeechFromJsonServer,
  getSearchedTermsFromJsonServer,
  createWorkoutFromJsonServer,
  insertHighlighterFromJsonServer,
  insertStyledSelectionFromJsonServer,
  insertCommentedSelectionFromJsonServer,
  insertTextToSpeechFromJsonServer,
  insertSearchedTermFromJsonServer,
  deleteWorkoutFromJsonServer,
  deleteHighlighterFromJsonServer,
  deleteStyledSelectionFromJsonServer,
  deleteCommentedSelectionFromJsonServer,
  deleteTextToSpeechFromJsonServer,
  deleteAllTextToSpeechFromJsonServer,
  deleteSearchedTermFromJsonServer,
  getWorkoutFromJsonServer,
  getHighlighterFromJsonServer,
  getStyledSelectionFromJsonServer,
  getCommentedSelectionFromJsonServer,
  getSearchedTermFromJsonServer,
  updateWorkoutFromJsonServer,
  // getWorkouts, 
  // getWorkout, 
  // createWorkout, 
  // deleteWorkout, 
  // updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts from json server
router.get('/notes', getWorkoutsFromJsonServer)
router.get('/highlighters', getHighlightersFromJsonServer)
router.get('/styledselections', getStyledSelectionsFromJsonServer)
router.get('/commentedselections', getCommentedSelectionsFromJsonServer)
router.get('/texttospeech', getTextToSpeechFromJsonServer)
router.get('/searchedterms', getSearchedTermsFromJsonServer)

// POST a new workout from json server
router.post('/notes', createWorkoutFromJsonServer)
router.post('/highlighters', insertHighlighterFromJsonServer)
router.post('/styledselections', insertStyledSelectionFromJsonServer)
router.post('/commentedselections', insertCommentedSelectionFromJsonServer)
router.post('/texttospeech', insertTextToSpeechFromJsonServer)
router.post('/searchedterms', insertSearchedTermFromJsonServer)

// DELETE a workout from json server
router.delete('/notes/:id', deleteWorkoutFromJsonServer)
router.delete('/highlighters/:id', deleteHighlighterFromJsonServer)
router.delete('/styledselections/:id', deleteStyledSelectionFromJsonServer)
router.delete('/commentedselections/:id', deleteCommentedSelectionFromJsonServer)
router.delete('/texttospeech/:id', deleteTextToSpeechFromJsonServer)
router.delete('/texttospeech', deleteAllTextToSpeechFromJsonServer)
router.delete('/searchedterms/:id', deleteSearchedTermFromJsonServer)

// GET a workout from json server
router.get('/notes/:id', getWorkoutFromJsonServer)
router.get('/highlighters/:id', getHighlighterFromJsonServer)
router.get('/styledselections/:id', getStyledSelectionFromJsonServer)
router.get('/commentedselections/:id', getCommentedSelectionFromJsonServer)
router.get('/searchedterms/:id', getSearchedTermFromJsonServer)

// UPDATE a workout from json server
router.patch('/notes/:id', updateWorkoutFromJsonServer)

// // GET all workouts
// router.get('/', getWorkouts)

// // GET a single workout
// router.get('/:id', getWorkout)

// // POST a new workout
// router.post('/', createWorkout)

// // DELETE a workout
// router.delete('/:id', deleteWorkout)

// // UPDATE a workout
// router.patch('/:id', updateWorkout)

module.exports = router