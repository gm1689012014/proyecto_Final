# proyecto_Final
API RESTful básica para gestión de productos
%% Diagrama de flujo de la API RESTful de productos
flowchart TD
    A[Inicio] --> B[GET /api/products]
    A --> C[GET /api/products/:id]
    A --> D[POST /api/products]
    A --> E[PUT /api/products/:id]
    A --> F[DELETE /api/products/:id]
    
    %% Consulta de todos los productos
    B --> B1[Controlador: getAllProducts]
    B1 --> B2[Modelo: Product.findAll()]
    B2 --> B3[Sequelize: SELECT * FROM products]
    B3 --> B4[Formatear respuesta JSON]
    B4 --> B5[Respuesta 200 con array]
    
    %% Consulta de producto por ID
    C --> C1[Controlador: getProductById]
    C1 --> C2[Modelo: Product.findByPk(id)]
    C2 --> C3{¿Existe?}
    C3 -->|Sí| C4[Respuesta 200 con producto]
    C3 -->|No| C5[Error 404]
    
    %% Crear producto
    D --> D1[Validar datos]
    D1 --> D2[Controlador: createProduct]
    D2 --> D3[Modelo: Product.create(data)]
    D3 --> D4[Sequelize: INSERT]
    D4 --> D5[Respuesta 201 creado]
    
    %% Actualizar producto
    E --> E1[Controlador: updateProduct]
    E1 --> E2[Modelo: Product.update(data)]
    E2 --> E3[Sequelize: UPDATE...WHERE]
    E3 --> E4[Respuesta 200 actualizado]
    
    %% Eliminar producto
    F --> F1[Controlador: deleteProduct]
    F1 --> F2[Modelo: Product.destroy()]
    F2 --> F3[Sequelize: DELETE WHERE]
    F3 --> F4[Respuesta 204]
    
    %% Estilo
    classDef route fill:#f9f,stroke:#333;
    classDef controller fill:#bbf,stroke:#333;
    classDef model fill:#f96,stroke:#333;
    classDef db fill:#6f9,stroke:#333;
    
    class B,C,D,E,F route;
    class B1,C1,D2,E1,F1 controller;
    class B2,C2,D3,E2,F2 model;
    class B3,C3,D4,E3,F3 db;
    