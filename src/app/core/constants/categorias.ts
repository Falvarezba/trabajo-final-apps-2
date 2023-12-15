import { Categoria } from "../interfaces/categoria";



export const CATEGORIAS : Categoria[] = [

    {
        nombre: "SUV",
        id: 1,
        fotoUrl: "https://www.lanacion.com.ar/resizer/v2/chevrolet-X3ZPTNTMNFDH5NLQUE2J4PNF54.jpg?auth=c2f86325dfc8c7bba01ceca07236fe2fff1968a2452c7a344a4ba223a7b4f626&width=420&height=280&quality=70&smart=true",
        productos: [{
            nombre: "TAOS",
            precio: 10000,
            descripcion: "Descubre la sofisticación en movimiento con la Volkswagen Taos 2023. Este SUV compacto combina diseño moderno, tecnología avanzada y eficiencia. Asientos espaciosos, conectividad de vanguardia y seguridad destacada hacen de la Taos la elección perfecta. ¡Reserva ahora y experimenta la libertad de conducir con estilo!",
            imagen: "https://blog.karvi.com.ar/wp-content/uploads/2021/05/Taos-2-e1622159343736.jpg"
        },
        {
            nombre: "TRACKER",
            precio: 8500,
            descripcion: "Chevrolet Tracker 2023, tu pasaporte a la aventura. Este SUV compacto ofrece un diseño audaz, tecnología inteligente y un rendimiento ágil. Con asientos versátiles, conectividad avanzada y características de seguridad líderes en su clase, la Tracker es la compañera ideal para tus viajes. ¡Reserva ahora y desata la emoción del camino!",
            imagen: "https://www.lanacion.com.ar/resizer/v2/chevrolet-X3ZPTNTMNFDH5NLQUE2J4PNF54.jpg?auth=c2f86325dfc8c7bba01ceca07236fe2fff1968a2452c7a344a4ba223a7b4f626&width=420&height=280&quality=70&smart=true"
        }]
      },
      {
        nombre: "Sedanes",
        id: 2,
        fotoUrl: "https://resizer.glanacion.com/resizer/v2/el-chevrolet-cruze-uno-de-los-ultimos-sedanes-que-3P7ROCUTKFCQLNSLK3SGZJWPTM.jpg?auth=649d0c5d9c5fa91907182ba1f62f8c371fa31b68da820922b01ee0ab1379978a&width=880&height=586&quality=70&smart=true",
        productos: [{
          nombre: "COROLLA",
          precio: 9000,
          descripcion: "Experimenta la excelencia con el Toyota Corolla Sedán 2023. Con un diseño aerodinámico y líneas refinadas, este automóvil combina estilo con eficiencia. Su interior cómodo, tecnología innovadora y seguridad avanzada hacen que cada viaje sea una experiencia inigualable. ¡Reserva tu Corolla Sedán ahora y descubre la elegancia en cada kilómetro!",
          imagen: "https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1600.jpg"
      },
      {
          nombre: "SENTRA",
          precio: 8500,
          descripcion: "Sumérgete en la elegancia moderna del Nissan Sentra 2023. Con un diseño aerodinámico y líneas atractivas, este sedán fusiona estilo con rendimiento eficiente. Su interior espacioso, tecnología intuitiva y características de seguridad avanzada crean un ambiente de conducción excepcional. ¡Reserva tu Sentra ahora y experimenta el equilibrio perfecto entre estilo y funcionalidad!",
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPipadLabcSqmIDVdDYfYwrmXm0c_JR98hA&usqp=CAU"
      }]
      },
      {
        nombre: "Hatchback",
        id: 3,
        fotoUrl: "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2017-Volkswagen-Golf-110TSI-Highline-R-Line-hatchback-yellow-press-image-why-a-hatchback-is-the-smartest-car-you-can-buy-1200x800p.jpg",
        productos: [{
          nombre: "ETIOS",
          precio: 5000,
          descripcion: "Descubre la esencia de la simplicidad y confiabilidad con el Toyota Etios 2023. Este automóvil compacto ofrece un diseño eficiente y funcionalidad sin complicaciones. Con un interior bien diseñado, economía de combustible destacada y la calidad Toyota, el Etios es la opción perfecta para un viaje sin preocupaciones. ¡Reserva tu Etios ahora y vive la experiencia Toyota!",
          imagen: "https://www.autoweb.com.ar/wp-content/uploads/2023/08/Etios-deja-de-producirse-en-Brasil-y-cierra-un-ciclo-de-10-anos-de-exito-en-Argentina.jpg"
      },
      {
          nombre: "208",
          precio: 6500,
          descripcion: "Sumérgete en la próxima generación de elegancia con el Peugeot 208 2023. Este hatchback combina un diseño vanguardista con tecnología de última generación. Su interior chic, eficiencia en combustible y características innovadoras te ofrecen un viaje lleno de estilo y comodidad. ¡Reserva tu Peugeot 208 ahora y experimenta la armonía entre forma y función!",
          imagen: "https://resizer.glanacion.com/resizer/v2/peugeot-208-WJ4TVBSZZNBOLHXZBFZLZOWZDI.jpg?auth=fa5b2e40dbed36cb4d9f35f0d1768104d7534f2f36c25d6a836c6506da15f306&width=880&height=586&quality=70&smart=true"
      }]
      },
      {
        nombre: "cabriolet",
        id: 4,
        fotoUrl: "https://static1.s123-cdn-static-a.com/uploads/7737037/800_64214ab67d2b1_filter_6421632038593.jpg",
        productos: [{
          nombre: "CAMARO",
          precio: 15000,
          descripcion: "Vive la emoción al máximo con el Chevrolet Camaro Cabriolet 2023. Este descapotable icónico combina estilo agresivo con un rendimiento impresionante. Con su diseño aerodinámico, tecnología avanzada y el rugido de su motor, el Camaro Cabriolet ofrece una experiencia de conducción única. ¡Reserva ahora y siente la potencia al aire libre!",
          imagen: "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/performance/2018-camaro-conversivel/mov/01-images/design-camaro-conversivel-2018-mov-safety-01.jpg?imwidth=960"
      },
      {
          nombre: "AUDI TT",
          precio: 13500,
          descripcion: "Sumérgete en el lujo descapotable con el Audi TT Cabriolet 2023. Este icónico convertible combina un diseño elegante con tecnología de vanguardia. Con un interior sofisticado, rendimiento dinámico y la artesanía característica de Audi, el TT Cabriolet ofrece una experiencia de conducción única. ¡Reserva tu Audi TT Cabriolet ahora y disfruta de la elegancia al aire libre!",
          imagen: "https://cdn.motor1.com/images/mgl/1bK33/s1/el-nuevo-audi-tt-ya-esta-en-la-argentina.jpg"
      }]
      }
]