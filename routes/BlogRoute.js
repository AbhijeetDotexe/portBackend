const express = require('express');
const router = express.Router();

const{createBlog, getBlog} = require('../Controller/BlogController');

router.post('/api/create',createBlog);
router.get('/api/get',getBlog);

module.exports = router;