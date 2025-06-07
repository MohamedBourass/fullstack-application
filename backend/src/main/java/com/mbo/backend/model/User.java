package com.mbo.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
//@EntityListeners(AuditingEntityListener.class)
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    private Set<Role> roles = new HashSet<>();

    /*@CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "creationdate", nullable = false)
    private Date creationDate;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "modificationdate", nullable = false)
    private Date modificationDate;

    @Column(name = "modifiedby", nullable = false)
    @LastModifiedBy
    private String modifiedBy;*/
}
