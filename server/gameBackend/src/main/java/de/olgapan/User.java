package de.olgapan;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private int clicks;

    public User(String name, int clicks) {
        this.name = name;
        this.clicks = clicks;
    }
}
