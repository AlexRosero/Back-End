const{Router}=require('express')
const router= Router()
const peliculasCtrl=require('../controllers/Peliculas.controller.js')

router.post('/crear',peliculasCtrl.nuevaPelicula)
router.get('/listarPeliculas',peliculasCtrl.listar)
router.get('/listar/:id',peliculasCtrl.listarId)
router.delete('/eliminar/:id',peliculasCtrl.eliminar)
router.put('/actualizar/:id',peliculasCtrl.actualizar)
router.get('/listarCriterio/:criterio',peliculasCtrl.buscarProductoCriterio)

module.exports = router;