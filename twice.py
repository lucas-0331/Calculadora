import networkx as nx
import numpy as np
from Prim import PrimMST
 
#Ler grafo G
A = np.loadtxt('ha30_dist.txt')
G = nx.from_numpy_matrix(A)
 
#Ciclo hamiltoniano H = vazio
H = []
 
T = PrimMST(G)
E = T.edges()
 
for e in E:
    T.add_edge(e) #Duplica as arestas
 
L = nx.eulerian_circuit(T) #Circuito euleriano em T
for i in range (len(L)): #Eliminar repeticoes
    if (H[i] != L[i]):
        H = H + L[i]
        L = L - L[i]