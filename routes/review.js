const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor}= require("../middleware.js")
const ReviewController = require("../controllers/review.js")

       //post review route
      router.post(
        "/",
        isLoggedIn,
        validateReview,
        wrapAsync(ReviewController.createReview));
      
      //Delete review route
      router.delete("/:reviewId", 
        isLoggedIn,
        isReviewAuthor,
        wrapAsync(ReviewController.destroyReview));

      module.exports = router;