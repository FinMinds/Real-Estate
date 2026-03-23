# Architectural Invariants

The following rules are durable architectural invariants and must remain true across the codebase:

- Append-only calculations
- Immutable published rule versions
- No hardcoded fiscal truth in controllers
- Explanation codes instead of hardcoded prose in engines
- All entitlement checks enforced server-side
- Pure calculation engines
- Versioned explainability
- Source-linked rules
- Strict module boundaries
- Free-tier gating based on persisted state
- Locale-independent calculations
- Auditability over convenience
