import _thread
import threading
import time, random

class Liberado:
  livre = True
 
  def mudarLivre(self,livre):
    self.livre = livre
  
  def getLivre(self):
    return self.livre


garfo = list()
for i in range(5):
   garfo.append(Liberado())

def filosofo(f):
  
   f = int(f)
   
   while True:
    
    if garfo[f].getLivre() ==True and garfo[(f + 1) % 5].getLivre() == True :
      
      garfo[f].mudarLivre(False)
      garfo[(f+1)%5].mudarLivre(False)
     
      print ("Filósofo", f, "comendo...")
    
      time.sleep(random.randint(1, 5))
      
      garfo[f].mudarLivre(True)
      garfo[(f + 1) % 5].mudarLivre(True)
      
      print ("Filósofo ", f ," pensando na comida...")
     
      time.sleep(random.randint(1, 10))

for i in range(5):
  print ("Filósofo")
  print(i)
  
  _thread.start_new_thread(filosofo, tuple([i]))


while True:
  continue