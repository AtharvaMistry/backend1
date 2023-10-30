const router = require('express').Router();

const {
    customerUser,
    allCustomer,
    businessUser,
    update_cusomer,
    delete_customer
} = require("../Controller/Auth_controller")


// customer
router.post("/customer", customerUser)
router.get("/allCustomer", allCustomer)
router.put("/updateCustomer/:id", update_cusomer)
router.delete("/deleteCustomer/:id",delete_customer)
// business
router.post("/businessUser", businessUser)

module.exports = router;