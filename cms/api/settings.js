const express = require('express')
// Requires status messages from http-status lib

const {
  OK,
  CREATED,
  NO_CONTENT,
  INTERNAL_SERVER_ERROR
} = require('http-status')


// Requires winston lib for log
const { log } = require('../../main/logger')
// Requires CRUD apis
const Setting = require('../db-api/settings')

const router = express.Router()
router.route('/')
// POST route
  .post(async (req, res, next) => {
    try {
      await Setting.create(req.body)
      res.status(CREATED).end()
    } catch (err) {
      log.error(err)
      next(err)
    }
  })
  // get all settings
  .get(async (req, res, next) => {
    try {
      const results = await Setting.list({ limit: req.query.limit, page: req.query.page })

   // Sends the given results with status 200
      res.status(OK).json({
        results: results.docs,
        pagination: {
          count: results.total,
          page: results.page,
          limit: results.limit
        }
      })
    } catch (err) {
      next(err)
    }
  })

router.route('/:id')
  // GET a post with a given ID
  .get(async (req, res, next) => {
    try {
      const setting = await Setting.get(req.params.id)
      res.status(OK).json(setting)
    } catch (err) {
      next(err)
    }
  })
  .put(async (req, res, next) => {
    try {
      await Setting.update({ id: req.params.id, setting: req.body })
      res.status(NO_CONTENT).end()
    } catch (err) {
      next(err)
    }
  })
  .delete(async (req, res, next) => {
    try {
      await Setting.remove(req.params.id)
      res.status(NO_CONTENT).end()
    } catch (err) {
      next(err)
    }
  })

  // Exports all the functions

module.exports = router
