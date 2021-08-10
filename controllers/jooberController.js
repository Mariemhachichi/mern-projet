// const Joober = require("../models/jooberModel")
// module.exports = {
//     // get joober
//     getJoober: async (req, res)=>{
//         try{
//             const joober =await Joober.find()
//             res.json(joober)
//         }catch (error){
//             console.error(error.message)
//         }
//     },
//     // add joober 
//     addJoober: async (req,res) => {
//         const photodeprofil = req.body.photodeprofil
//         const Description = req.body.Description;
//         const nom = req.body.nom;
//         const prenom = req.body.prenom
//         const numrodetlphone = req.body.numrodetlphone
//         const sexe = req.body.sexe
//         const adresse = req.body.adresse
//         const ville = req.body.ville
//         const statutprofessionel = req.body.statutprofessionel
//         try{
//             joober = new Joober({
//                 photodeprofil,
//                 Description,
//                 nom,
//                 prenom,
//                 numrodetlphone,
//                 sexe,
//                 adresse,
//                 ville,
//                 statutprofessionel
//             })
//             await joober.save()
//             res.json(joober)
//         }catch (error){
//             console.error(error.message)
//         }
//     },
//     //delete
//     deleteJoober: async (req,res) => {
//         try {
//             const joober = await Joober.findByIdAndDelete(req.params.id)
//             res.json(joober)
//         }catch (error){
//             console.error(error.message)
//         }
//     },
//     //update
//     updateJoober: async(req,res)=>{
//         try{
//             const joober = await Joober.findByIdAndUpdate(
//                 req.params.id,
//                 req.body,
//                 {new : true}
//             )
//             res.json(joober)
//         }catch (error){
//             console.error(error.message)
//         }
//     }
// }