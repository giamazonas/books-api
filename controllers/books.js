import { Book } from '../models/book.js'

function index(req, res) {
  Book.find({})
  .then(books => {
    res.json(books)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function create(req, res) {
  Book.create(req.body)
  .then(book => res.json(book))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function show(req, res) {
  Book.findById(req.params.id)
  .then(book => res.json(book))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function update(req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body, { new:true})
  .then(book => res.json(book))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id)
  .then(book => res.json(book))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  index,
  create, 
  show,
  update,
  deleteBook as delete,
}