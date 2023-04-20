using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Score : MonoBehaviour{

    [SerializeField] TMP_Text scoreText;

    short points;
    public GameObject particles;
    // [SerializeField] ParticleSystem particles;

    void Start(){
        points = 0;
    }

    void Update(){
        
    }

    private void OnTriggerExit2D(Collider2D collision){
        points += 1;
        scoreText.text = "Score: " + points;
        //particles.Emit(15);

        Instantiate(particles, transform.position, Quaternion.identity);
        // print("Points: " + points);
        
    }
}
