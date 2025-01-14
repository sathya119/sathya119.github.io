Let us start with the Schrodinger wave equation 

$$\begin{pmatrix}-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x)\end{pmatrix}\Psi(x,t)=i\hbar\frac{\partial}{\partial t}\Psi(x,t)$$

The Hamiltonian is given by 

$$H=-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x)$$

We can a general solution of the form 

$$\Psi(x,t)=\sum_n e^{-i\tfrac{E_n t}{\hbar}}c_n\psi_n(x)$$

To determine the coefficients, we start with a state

$$\Psi(x,t_0)=\sum_n e^{-i\tfrac{E_nt_0}{\hbar}}c_n\psi_n(x)$$

Then, 

$$c_n=e^{i\tfrac{E_nt_0}{\hbar}}\int dx\psi_n^*(x)\Psi(x,t_0)$$

So,

$$\Psi(x,t_0)=\sum_n \int dx_0 \;e^{-i\tfrac{E_n (t-t_0)}{\hbar}}\psi_n^*(x_0)\Psi(x_0,t_0)\psi_n(x)$$

or

$$\Psi(x,t)=\int dx_0\;K(x,t;x_0,t_0)\Psi(x_0,t_0)$$

where K is the Feynman Kernel defined as

$$K(x,t;x_0,t_0)=e^{-i\tfrac{E_n (t-t_0)}{\hbar}}\psi_n(x)\psi_n^*(x_0)$$

Remarks:
1. K is a function of x and t.
2. When t->t0, K becomes the delta function.
3. $$\int dx\;K(x',t':x,t)K(x,t:x_0,t_0)=K(x',t':x_0,t_0)$$