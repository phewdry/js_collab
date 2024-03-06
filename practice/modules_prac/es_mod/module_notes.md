Consider the following two ES6 modules:

**moduleA.js**:
```javascript
import { funcB } from './moduleB';

export function funcA() {
    console.log('Function A');
    funcB();
}
```

**moduleB.js**:
```javascript
import { funcA } from './moduleA';

export function funcB() {
    console.log('Function B');
    funcA();
}
```

Now, let's see what happens during the compile-time phase:

1. **Parsing and Dependency Resolution**:
   - When Node.js encounters `import` statements in `moduleA.js`, it parses the code and identifies the dependency on `moduleB.js`.
   - Similarly, when Node.js encounters `import` statements in `moduleB.js`, it identifies the dependency on `moduleA.js`.

2. **Binding**:
   - Node.js binds the imported functions (`funcB` in `moduleA.js` and `funcA` in `moduleB.js`) to their respective exports in the importing modules.

3. **Static Analysis**:
   - Node.js performs static analysis to ensure that the dependencies between modules are resolved correctly and there are no circular dependencies.

4. **Optimization (Optional)**:
   - Some module loaders or bundlers may perform optimizations during this phase, such as removing unused exports (tree-shaking) or combining modules into a single file.

Here's the dependency graph:

```
       +-----------+       +-----------+
       | moduleA.js|       | moduleB.js|
       +-----------+       +-----------+
              |                  |
              v                  v
       +-----------+       +-----------+
       |  funcA    |       |  funcB    |
       +-----------+       +-----------+
              |                  |
              v                  v
       +-----------+       +-----------+
       |  funcB    |       |  funcA    |
       +-----------+       +-----------+
```

In this graph:
- `moduleA.js` depends on `funcB` from `moduleB.js`.
- `moduleB.js` depends on `funcA` from `moduleA.js`.
- This creates a circular dependency between the two modules, which Node.js will handle by resolving imports and exports correctly during the compile-time phase.

This graph illustrates how Node.js analyzes, resolves, and binds dependencies between ES6 modules during the compile-time phase, ensuring that the program's structure and behavior are determined before execution.