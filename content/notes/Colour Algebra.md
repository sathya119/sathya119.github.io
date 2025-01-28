**1. Fundamental Properties**
The $$SU(N_c)$$  Lie group depends on the real parameters 

$$\theta^a \text{ with } a=1,...,N_c^2-1$$

Then, any arbitrary element of the group U can be written as 

$$U_{ij}=[e^{-ig_s\theta^at^a}]_{ij}$$ for generators $$t^{ij}$$ and strong coupling constant $$g_s$$ with $$U\in SU(N_c)$$

Here,

$$t^a=\frac{\lambda^a}{2}\text{ where }\lambda^a\text{ are the 8 Gell-Mann matrices }$$

An important relation for generators is

$$[t^a,t^b]\equiv f_{abc}t^c$$

where f are the totally anti-symmetric structure constants.

**2. Fundamental Representation**
Consider the generators of the fundamental representation, $$t_{ij}^a$$ where $$a=1,...,N_c^2-1$$ and $$i,j=1,...,N_c$$

There are $$(N_c^2-1)$$ generators that can each be represented by an $$N_c\times N_c$$ matrix.

These generators have the following properties:
- Hermitian: $$(t^a)^\dagger=t^a$$
	- Proof: Using $$U=e^{-ig_s\theta^a t^a}$$ and since $$U\in SU(N_c)$$ (unitary),

$$UU^\dagger=(1-ig_s\theta^at^a)(1+ig_s\theta^b(t^b)^\dagger)+...=1+ig_s\theta^a((t^a)^\dagger-t^a...=1)\implies(t^a)^\dagger=t^a$$

- Traceless: $$tr[t^a]=0$$
	- Proof: U is special,

$$det[U]=e^{-ig_s\theta^atr[t^a]}=1\implies tr[t^a]=0$$

- Normalisation: $$tr[t^a t^b]=T_F\delta^{ab}$$ (we will pick $$T_F=\frac{1}{2}$$)
- Commutator: $$[t^a,t^b]=if^{abc}t^c$$
- Fierz Identity: $$t^a_{ij}t^a_{kl}=T_F(\delta_{il}\delta_{kj}-\frac{1}{N_c}\delta_{ij}\delta_{kl})$$
	- Proof: