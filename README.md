 <h2 align="center">
  API de Hotel - Node.js | Sequelize
</h2>

- En este repositorio encontraras la gestión Backend para el proceso de reservas de acuerdo a la gestión de un hotel en el cual se puede encontrar con un ORM como lo es Sequelize para la gestión hacia la base de datos esto con el fin de realizar una gestión mucho mas eficaz.

<h3> 🛠️ Indicaciones de la Api 🛠️ </h3>

***Requisitos***

- Node version "v20.16.0no"
- npm version "8.19.2"
- MySQL
> [!NOTE]
> Puede que sea necesario que cree en su base de datos MySQL el schema `hotel_db` y modificar las credencias en el `.env`, esto con el fin de que se creen las tablas y las relaciones correspondientes.

***Comandos***
>
- Ejecute `npm install --force o npm install --legacy-peer-deps` permite crear los archivos necesarios para gestionar la api.
- Ejecute `npm start` para que se inicie la api, si todo salio correcto tendríamos disponible el puerto `localhost:3000` para el cual ya podemos realizarle peticiones.

***request use***

> [!NOTE]
> Se realizaron pruebas unitarias con postman por lo cual dejo archivo .json en la raiz del proyecto para importar los casos de uso `Hotel-api.postman_collection.json` o puedes encontrar estos casos de uso en el siguiente link `https://documenter.getpostman.com/view/31586031/2sAXjM3B9r`. 

- Registrar Usuario:
>`POST` http://localhost:3000/api/auth/register
Body:
```json
{
  "username": "Prueba1",
  "email":"prueba1@gmail.com",
  "password": "prueba1"

}
```
- Login Usuario:
>`POST` http://localhost:3000/api/auth/login
Body:
```json
{
  "username": "Prueba1",
  "password": "prueba1"
}
```
- Crear Huespedes:
>`POST` http://localhost:3000/api/guests
Headers: `Authorization: token`
Body:
```json
{
{
  "first_name": "ejemplo",
  "last_name": "ejemplos",
  "email": "ejemplo@gmail.com",
  "phone_number": "3130000000"
}
}
```

- Consulta Huesped de acuerdo al Id:
>`GET` http://localhost:3000/api/guests/{id}
Headers: `Authorization: token`

- Consulta Huespedes:
>`GET` http://localhost:3000/api/guests
Headers: `Authorization: token`

- Modificar Huespedes:
>`PUT` http://localhost:3000/api/guests/{id}
Headers: `Authorization: token`
Body:
```json
{
  "email": "Pruebas001@gmail.com",
  "phone_number": "3180000000"
}
```

- Eliminar Huespedes:
>`DELETE` http://localhost:3000/api/guests/{id}
Headers: `Authorization: token`

- Crear Hotel:
>`POST` http://localhost:3000/api/hotels
Headers: `Authorization: token`
Body:
```json
{
  "name": "PruebaHotel",
  "address": "Carrera 1 a # 1-1",
  "city": "Prueba",
  "country": "Prueba",
  "phone_number": "3000000000"
}
```

- Consulta el Hotel de acuerdo al Id:
>`GET` http://localhost:3000/api/hotels/{id}
Headers: `Authorization: token`

- Consulta Hoteles:
>`GET` http://localhost:3000/api/hotels
Headers: `Authorization: token`

- Modificar Hoteles:
>`PUT` http://localhost:3000/api/hotels/{id}
Headers: `Authorization: token`
Body:
```json
{
  "address": "Carrera 11 # 1-1",
  "phone_number": "3180000000"
}
```

- Eliminar Hoteles:
>`DELETE` http://localhost:3000/api/hotels/{id}
Headers: `Authorization: token`

- Crear Habitación:
>`POST` http://localhost:3000/api/rooms
Headers: `Authorization: token`
Body:
```json
{
  "hotel_id": 1,
  "room_number": "1001",
  "type": "Habitación individual",
  "price_per_night": "400.00"
}
```

- Consulta la Habitación de acuerdo al Id:
>`GET` http://localhost:3000/api/rooms/{id}
Headers: `Authorization: token`

- Consulta las Habitaciónes:
>`GET` http://localhost:3000/api/rooms
Headers: `Authorization: token`

- Modificar Habitaciónes:
>`PUT` http://localhost:3000/api/rooms/{id}
Headers: `Authorization: token`
Body:
```json
{
    "is_available": true
}
```

- Eliminar Hoteles:
>`DELETE` http://localhost:3000/api/rooms/{id}
Headers: `Authorization: token`

- Crear Reservaciones:
>`POST` http://localhost:3000/api/reservations
Headers: `Authorization: token`
Body:
```json
{
  "guest_id": 2,
  "room_id": 1,
  "check_in_date": "2024-09-01",
  "check_out_date": "2024-09-05",
  "total_price": 500.00,
  "status": "confirmed"
}
```

- Modificar Reservaciones:
>`PUT` http://localhost:3000/api/reservations/{id}
Headers: `Authorization: token`
Body:
```json
{
  "check_out_date": "2024-09-06",
  "total_price": 600.00
}
```

- Eliminar Reservaciones:
>`DELETE` http://localhost:3000/api/reservations/{id}
Headers: `Authorization: token`

- Consulta las Reservaciones y filtro por fecha, servicio y cliente:
>`GET` http://localhost:3000/api/reservations?service=1&customer=2
Headers: `Authorization: token`
Query: 
```json
{
  "service": 1,
  "customer": 1
}

