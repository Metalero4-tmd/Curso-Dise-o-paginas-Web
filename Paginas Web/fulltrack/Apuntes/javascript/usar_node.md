# 🚀 Inicializar Proyecto Node.js

---

## 1. Crear el proyecto

Ejecutar el siguiente comando en la terminal dentro de la carpeta del proyecto:

```bash
npm init -y
```

> ✅ El flag `-y` acepta todos los valores por defecto automáticamente, sin hacer preguntas.

---

## 2. ⚠️ Si aparece un error de permisos (Windows PowerShell)

El error ocurre porque **PowerShell bloquea la ejecución de scripts** por seguridad.

Para solucionarlo, ejecutar:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### ¿Qué hace este comando?

| Parámetro | Descripción |
|---|---|
| `RemoteSigned` | Permite scripts locales; los de internet deben estar firmados |
| `-Scope CurrentUser` | Aplica el cambio **solo a tu usuario**, sin afectar el sistema |

---

## 3. Volver a ejecutar

Una vez habilitada la política, correr nuevamente:

```bash
npm init -y
```

> ✅ Ahora debería funcionar correctamente.

---

## 4. Resultado esperado

Se generará un archivo `package.json` con esta estructura:

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

> 💡 **Tip:** Podés editar el `package.json` luego para agregar tu nombre, descripción y dependencias del proyecto.