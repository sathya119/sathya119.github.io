---
title: The Quanta of the Field
slug: the-quanta-of-the-field
---
The quanta created by $a^{\dagger}$ has a particle interpretation $$[H,a^{\dagger}_{k'}]=\int[d \vec{k'}][a^{\dagger}_{k}a_{k},a^{\dagger}_{k'}]E_{k}=E_{k'}a^{\dagger}_{k'}$$ so that if we act on an energy eigenstate $\ket{E_{s}}$ with energy $E_s$, with the Hamiltonian $H$:

$$\ket{E_{s'}}=a^{\dagger}_{k}\ket{E_{s}}\;\;\;\;H\ket{E_{s'}}=\left([H,a^{\dagger}_{k'}]+a^{\dagger}_{k'}H\right)\ket{E_{s}}=(E_{k}+E_{s})\ket{E_{s'}}$$.

In words, what is returned is another energy eigenstate with energy increased by a quanta $E_{k}$ from when $a^{\dagger}$ acts. On the other hand, $a$ decreases $E_s$ and so we can conclude that:

- $a^{\dagger}_{k} \leftrightarrow$ creates particle with momentum $\vec{p}=\hbar \vec{k}$.
- $a_{k} \leftrightarrow$ annihilates particle with momentum $\vec{p}=\hbar \vec{k}$.

The $\delta^{3}(0)$ term is a vacuum energy and an overall shift of all energies. We will drop it since we are interested only in the differences in energies. But, it relates to one of the deepest puzzles in cosmology, the cosmological constant $\Lambda$.

To do so, we introduce normal ordering $:O:$ where

$$:a_{k_{1}}a_{k_{2}}^{\dagger}=a^{\dagger}_{k_{2}}a_{k_{1}}$$

$$:a_{k_{1}}a_{k_{2}}a^{\dagger}_{k_{3}}a_{k_{4}}a^{\dagger}_{k_{5}}:=a^{\dagger}_{k_{3}}a^{\dagger}_{k_{5}}a_{k_{1}}a_{k_{2}}a_{k_{4}}$$.

That is, all $a^{\dagger}$ to the left of $a$ so that,

$$H\equiv: \frac{1}{2}\int d^{3}x (\Pi^{2}+(c\nabla \phi)^{2}+\alpha \phi^{2}):=\int [d \vec{k}]E_{k}:\frac{\{a^{\dagger}_{k},a_{k}\}}{2}:=\int[d \vec{k}]E_{k}a^{\dagger}_{k},a_{k}$$.

With this normal ordered definition of $H$, $H\ket{0}=0$. The first excited state is $Ha^{\dagger}_{k}\ket{0}=E_{k}a^{\dagger}_{k}\ket{0}$ where $E_{k}\geq mc^{2}$. Next, a two particle state $a^{\dagger}_{k}a^{\dagger}_{k'}\ket{0}$ and so on. A general state in this space will be the superposition of such states as 

$$\ket{s}=f^{(0)}\ket{0}+f^{(1)}(k_{1})a^{\dagger}_{k_{1}}\ket{0} +f^{(2)}(k_{1},k_{2})a^{\dagger}_{k_{1}}a^{\dagger}_{k_{2}}\ket{0}+\dots=\sum_{n} f^{(n)(k_{1},\dots,k_{n})}\left( \prod_{n}a^{\dagger}_{k_{n}} \right)\ket{0} $$

with $$H(a^{\dagger}_{k_{1}},\dots,a^{\dagger}_{k_{n}})\ket{0} =\left( \sum_{i}E_{k_{i}} \right)a^{\dagger}_{k_{1}}\dots a^{\dagger}_{k_{n}}\ket{0} $$.

This space, being larger than the usual Hilbert space includes multiparticle states and allows us to describe transitions. It is called Fock Space.

## Normalisation of Momentum States

- In a box: If in a box of volume $V$ we have discretised momentum and 

$$(2\pi)^{3}\delta^{3}(\vec{k}-\vec{k'})\rightarrow \int_{V}d^{3}x e^{i(\vec{k}-\vec{k'}).\vec{x}}\xrightarrow{\vec{k}\rightarrow \vec{k'}}V$$ so that $$\ket{k}_{V} \equiv \frac{a_{k}}{\sqrt{ N_{k}V }}\ket{0}$$ for $_{V}\braket{k|k}_{V}=1$.

- Non-relativistic: We use arrow notation $\ket{\vec{k}}$,

$$\braket{\vec{k}|\vec{k}}=(2\pi)^{3}\delta^{3}(\vec{k}-\vec{k'})$$ and $$\ket{\vec{k}}\equiv \frac{a_{k}}{\sqrt{ N_{k} }}\ket{0}$$.

- Relativistic: Now without an arrow $\ket{k}$,

$$\braket{k|k}=(2\pi)^{3}\delta^{3}(\vec{k}-\vec{k'})$$ and $$\ket{k}\equiv \sqrt{ \frac{2E_{k}}{N_{k}} }a_{k}\ket{0}  $$.

Also note, $$\phi(\vec{x})\ket{0}=\int [d \vec{k}]e^{-i \vec{k}.\vec{x}}\sqrt{ \frac{2E_{k}}{N_{k}} }a_{k}^{\dagger}\ket{0}=\int \frac{d^{3}k}{(2\pi)^{3}2E_{k}}e^{-i \vec{k}.\vec{x}}\ket{k} $$.

