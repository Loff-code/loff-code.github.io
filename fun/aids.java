public class aids {
    public static void main(String[] args) {
        int a[] = { 2 }; // Use an array to hold the value
        add(a);
        System.out.println(a[0]); // Now prints 3
    }

    static void add(int[] a) {
        a[0]++; // Modify the array element
    }
}
