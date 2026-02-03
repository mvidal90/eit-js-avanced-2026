
const xhr = new XMLHttpRequest;
console.log(xhr.readyState) // 0 --> UNSENT (Sólo fue creada la instancia)

// Methods
// GET -> Consultar datos
// POST -> Craer datos nuevos
// PUT -> Crear o reemplazar datos
// PATCH -> Edita o modifica un valor puntual del elemento
// DELETE -> Elimina

xhr.open("GET", "../data/movies.json")
console.log(xhr.readyState) // 1 --> OPENED (El método se llamó)

// 2 --> HEADERS_RECEIVED (Se llama al método send)
// 3 --> LOADING (Carga o descarga de la infomación) 

// 4 --> DONE (La operación se completo correctamente)
xhr.addEventListener(
    "readystatechange",
    () => {
        console.log("El valor de readystate es:", xhr.readyState)
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response))
        }
    }
)

xhr.send()