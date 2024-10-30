#include <stdio.h>
typedef struct
{
    int id;
    char name[64]
} poop;

int poopthing(poop *poop)
{
    poop->id = 2;
    memset(poop->name, 0, 64);
}

int main(int argc, char const *argv[])
{
    poop p;
    poopthing(&p);
    printf("%i", p.id);
    return 0;
}
