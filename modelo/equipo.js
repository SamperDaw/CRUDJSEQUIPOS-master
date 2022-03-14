const mongoose = require('mongoose');
const EquipoSchema = mongoose.Schema(
{
    nombre: {
        type:String,
        required: [true,'El nombre es obligatorio']
    },
    imagen: {
        type:String
    },
    dorsal: {
        type:Number,
        required: [true,'El dorsal es obligatoria']
    },
    equipo: {
        type:String,
        required: [true,'El equipo es obligatorio']
    }
}
)
//sobreescribimos un método del Schema para modificar el objeto que exporta
EquipoSchema.methods.toJSON = function() {
    const { _id,...equipo} = this.toObject() ;
    equipo.id=_id;
    return equipo;
}

let Equipo = mongoose.model('Equipo',EquipoSchema);
module.exports = Equipo;