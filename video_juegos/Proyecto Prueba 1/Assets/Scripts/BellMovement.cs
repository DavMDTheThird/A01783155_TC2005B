using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BellMovement : MonoBehaviour
{
    [SerializeField] float anglelimit;
    [SerializeField] float speed;
    [SerializeField] float ringDuration;

    AudioSource audioSource;

    float angle;
    int direction = 1;
    float t = 0.5f;
    bool isRinging = false;
    float timeElapsed;
    
    // Start is called before the first frame update
    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }
    
    // Update is called once per frame
    void Update()
    {
        // Otra forma No se checa si ya esta sonando.
        if(isRinging){
            Ring();
            timeElapsed+=Time.deltaTime;
            if(timeElapsed > ringDuration){
                isRinging = false;
            }
        }
        if(Input.GetKeyDown(KeyCode.R)){
            StartRing();
        }

    }

    public void StartRing(){
        t = 0.5f;
        timeElapsed = 0;
        audioSource.Play();
    }

    void Ring(){
        angle = Mathf.Lerp(-anglelimit, anglelimit,t);
        transform.localRotation = Quaternion.Euler(0,0,angle);

        t += direction * speed * Time.deltaTime;

        if(t > 1 || t < 0){
            direction *= -1;
        }
    }

}
