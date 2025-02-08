const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ 1️⃣ Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, "public")));

// ✅ 2️⃣ Redirigir "/" al Dashboard Principal en `core/dashboard.html`
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "core", "dashboard.html"));
});

// ✅ 3️⃣ Redirigir "/veterinaria-admin" al Dashboard de Veterinaria
app.get("/veterinaria-admin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "modules", "veterinaria-admin", "pages", "core", "dashboard.html"));
});

// ✅ 4️⃣ Manejar las páginas dentro de `veterinaria-admin/pages/core/`
app.get("/veterinaria-admin/core/:file", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "modules", "veterinaria-admin", "pages", "core", req.params.file));
});

// ✅ 5️⃣ Manejar módulos dentro de `veterinaria-admin/pages/modules/`
app.get("/veterinaria-admin/modules/:modulo/:file", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "modules", "veterinaria-admin", "pages", "modules", req.params.modulo, req.params.file));
});

// ✅ 6️⃣ Servir correctamente los archivos de `assets/` en `veterinaria-admin`
app.use("/veterinaria-admin/assets", express.static(path.join(__dirname, "public", "modules", "veterinaria-admin", "assets")));

// ✅ 7️⃣ Servir correctamente los archivos de `data/` en `veterinaria-admin`
app.use("/veterinaria-admin/data", express.static(path.join(__dirname, "public", "modules", "veterinaria-admin", "data")));

// ✅ 8️⃣ Manejar cualquier otro archivo dentro de "public"
app.get("*", (req, res) => {
    const filePath = path.join(__dirname, "public", req.path);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("🚨 Error 404: Página no encontrada.");
        }
    });
});

// ✅ 9️⃣ Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
