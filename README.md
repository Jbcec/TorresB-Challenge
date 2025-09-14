# 🧮 Calculadora StencilJS

Calculadora  desarrollada con **StencilJS** y **TypeScript** que implementa una arquitectura basada en componentes reutilizables. El proyecto incluye un display funcional, un panel de historial de operaciones y funcionalidades adicionales como soporte para teclado y clipboard.

## 🚀 Características

### Funcionalidades Core
- ✅ **Display**: Muestra la operación actual con límite de caracteres
- ✅ **Panel de Log/Historial**: Registro de las últimas 20 operaciones realizadas
- ✅ **Operaciones básicas**: Suma, resta, multiplicación, división y módulo

### Funcionalidades Extra
- 🎯 **Soporte de teclado**: Operaciones con teclas numéricas y funcionales
- 📋 **Funciones de clipboard**: Copiar (COPY) y pegar (PASTE) valores
- 🧹 **Limpieza selectiva**: Clear (C) para el display y Clear Log (CLR) para el historial
- ⌨️ **Atajos de teclado**:
  - `Enter` → Calcular (=)
  - `Backspace` → Borrar último carácter
  - `Escape` → Limpiar display (C)

## 🛠️ Tecnologías

- **StencilJS** 
- **TypeScript** 
- **SCSS/SASS** 

## 📁 Estructura del Proyecto

```
challenge-calculadora/
├── src/
│   ├── components/
│   │   ├── calc-app/           # Componente principal
│   │   │   ├── calc-app.tsx
│   │   │   └── calc-app.scss
│   │   ├── calc-display/       # Display de la calculadora
│   │   │   ├── calc-display.tsx
│   │   │   └── calc-display.scss
│   │   ├── calc-keypad/        # Teclado numérico
│   │   │   ├── calc-keypad.tsx
│   │   │   └── calc-keypad.scss
│   │   └── calc-log/           # Panel de historial
│   │       ├── calc-log.tsx
│   │       └── calc-log.scss
│   ├── utils/
│   │   └── calc-engine.ts      # Motor de cálculo
│   └── index.html
├── package.json
└── stencil.config.ts
```

## ⚡ Instalación y Uso

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Jbcec/TorresB-Challenge.git
cd challenge-calculadora

# 2. Instalar dependencias
npm install

# 3. Ejecutar (Corre en el puerto http://localhost:3333/)
npm start
```

## 🎮 Cómo usar

### Interfaz gráfica
- Click en los botones numéricos y operadores
- Utiliza los botones especiales:
  - **C**: Limpiar display
  - **CLR**: Limpiar historial
  - **COPY**: Copiar resultado al clipboard
  - **PASTE**: Pegar desde clipboard

### Atajos de teclado
- **Números (0-9)**: Input numérico
- **Operadores (+, -, *, /, %)**: Operaciones
- **Enter**: Ejecutar cálculo
- **Backspace**: Borrar último carácter
- **Escape**: Limpiar display

## 🧪 Motor de Cálculo

La calculadora utiliza un motor de cálculo personalizado (`calc-engine.ts`) que:
- Prevee la inyección de código, vulnerabilidad presente al usar "eval()"
- Maneja errores de sintaxis y división por cero
- Soporta operaciones básicas y módulo
- Valida input antes del procesamiento

## 🎨 Estilos y Diseño

- **SCSS modular**: Cada componente tiene sus propios estilos
- **Shadow DOM**: Encapsulación de estilos por componente
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## 📈 Posibles Mejoras

- [ ] Operaciones científicas (sin², cos, log, etc.)
- [ ] Themes/Modo oscuro
- [ ] Guardado de historial en localStorage
- [ ] Animaciones de transición
- [ ] Soporte para expresiones complejas con paréntesis
- [ ] Export del historial a archivo

**Desarrollado usando StencilJS y TypeScript**
