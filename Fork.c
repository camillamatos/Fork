#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

int main(void){
    int i;
    pid_t pid;

    if ((pid = fork()) < 0){
        perror("fork");
        exit(1);
    }

    if (pid == 0){
        //Processo filho
        printf("pid Filho: %d\n", getpid());
    } else {
        //Processo pai
        printf("pid Pai: %d\n", getpid());
    }

    printf("Ambos os processos foram executados\n\n");
    scanf("%d", &i);
    exit(0);
}
