# 🎨 Guía de Fuentes - Lora

## Configuración Global

El proyecto ahora usa **Lora** como fuente principal, con **cursiva por defecto** para crear un aspecto más elegante y distintivo. Lora es una fuente serif elegante diseñada específicamente para excelente legibilidad en pantallas.

## Clases de Fuente Disponibles

### Clases Principales (Cursiva por defecto)
- `.font-lora` - Fuente normal en cursiva
- `.font-lora-bold` - Fuente negrita en cursiva
- `.font-lora-medium` - Fuente media en cursiva
- `.font-lora-semibold` - Fuente semi-negrita en cursiva

### Clases con Estilo Normal (Para elementos que necesiten legibilidad)
- `.font-lora-normal` - Fuente normal sin cursiva
- `.font-lora-bold-normal` - Fuente negrita sin cursiva

### Clases de Utilidad
- `.font-normal-style` - Aplica estilo normal a cualquier elemento
- `.font-italic-style` - Aplica estilo cursiva a cualquier elemento

## Cuándo Usar Cada Estilo

### ✅ Usar Cursiva (Por defecto)
- Títulos principales
- Subtítulos
- Párrafos de texto
- Descripciones
- Contenido narrativo

### ✅ Usar Estilo Normal
- Logos y marcas
- Botones y elementos interactivos
- Formularios (inputs, labels)
- Código y elementos técnicos
- Números y datos importantes

## Ejemplos de Uso

```jsx
// Título elegante en cursiva
<h1 className="font-lora-bold text-3xl">
  Mi Título Elegante
</h1>

// Párrafo en cursiva
<p className="font-lora">
  Este texto aparecerá en cursiva elegante
</p>

// Botón con texto normal para mejor legibilidad
<button className="font-normal-style">
  Hacer clic aquí
</button>

// Logo con estilo normal
<span className="font-lora-bold-normal">
  EL ABSOLUTO UNIVERSAL
</span>
```

## Características de Lora

- **Elegante y suave** - Perfecta para proyectos de bienestar
- **Excelente legibilidad** - Diseñada específicamente para pantallas
- **Cursiva excepcional** - Trazos fluidos y naturales
- **Múltiples pesos** - Del 400 (normal) al 700 (bold)
- **Optimizada para web** - Carga rápida y rendimiento
- **Compatibilidad universal** - Funciona en todos los navegadores

## Beneficios del Diseño en Cursiva con Lora

1. **Aspecto más elegante** - Transmite sofisticación y profesionalismo
2. **Mejor legibilidad** - Lora está optimizada para pantallas
3. **Distintivo** - Hace que tu sitio se destaque de la competencia
4. **Cohesión visual** - Crea una identidad visual consistente
5. **Perfecta para bienestar** - La cursiva suave transmite calidez y elegancia

## Ventajas de Lora sobre otras fuentes

- **Más suave** que Playfair Display
- **Mejor legibilidad** en dispositivos móviles
- **Cursiva más natural** y fluida
- **Optimizada para contenido extenso**
- **Ideal para temáticas espirituales** y de bienestar

## Notas Importantes

- Los elementos interactivos (botones, enlaces) mantienen estilo normal para mejor usabilidad
- El código y elementos técnicos siempre usan estilo normal
- La fuente se carga automáticamente desde Google Fonts
- Todas las clases son responsivas y funcionan en todos los dispositivos
- Lora es especialmente buena para contenido de bienestar y desarrollo personal 